/**
 * expo-sqlite query engine — same request/response API as electron/database.js
 */
import * as SQLite from 'expo-sqlite';
import {
  JSON_COLUMNS,
  DATE_COLUMNS,
  BOOLEAN_COLUMNS,
  TABLE_SCHEMAS,
} from './schema';

type SQLiteDatabase = SQLite.SQLiteDatabase;

let db: SQLiteDatabase | null = null;
const tableColumnsCache = new Map<string, Set<string>>();

function toIso(val: unknown): string | null {
  if (!val) return null;
  if (val instanceof Date) return val.toISOString();
  if (typeof val === 'string') return val;
  try {
    return new Date(val as string).toISOString();
  } catch {
    return null;
  }
}

function serializeRow(tableName: string, row: Record<string, unknown>): Record<string, unknown> {
  if (!row) return row;
  const r = { ...row };

  for (const col of JSON_COLUMNS[tableName] || []) {
    if (r[col] !== undefined && r[col] !== null && typeof r[col] !== 'string') {
      r[col] = JSON.stringify(r[col]);
    }
  }
  for (const col of DATE_COLUMNS[tableName] || []) {
    if (r[col] !== undefined && r[col] !== null) {
      r[col] = toIso(r[col]);
    }
  }
  for (const col of BOOLEAN_COLUMNS[tableName] || []) {
    if (r[col] !== undefined && r[col] !== null) {
      r[col] = r[col] === true || r[col] === 1 ? 1 : 0;
    }
  }
  return r;
}

function deserializeRow(tableName: string, row: Record<string, unknown>): Record<string, unknown> {
  if (!row) return row;
  const r = { ...row };

  for (const col of JSON_COLUMNS[tableName] || []) {
    if (r[col] && typeof r[col] === 'string') {
      try {
        r[col] = JSON.parse(r[col] as string);
      } catch {
        r[col] = [];
      }
    } else if (r[col] === null || r[col] === undefined) {
      r[col] = Array.isArray(r[col]) ? [] : r[col];
    }
  }
  for (const col of DATE_COLUMNS[tableName] || []) {
    if (r[col] && typeof r[col] === 'string') {
      r[col] = new Date(r[col] as string);
    }
  }
  for (const col of BOOLEAN_COLUMNS[tableName] || []) {
    if (r[col] !== undefined && r[col] !== null) {
      r[col] = r[col] === 1 || r[col] === true;
    }
  }
  return r;
}

async function getTableColumns(tableName: string): Promise<Set<string>> {
  if (tableColumnsCache.has(tableName)) {
    return tableColumnsCache.get(tableName)!;
  }
  if (!db) throw new Error('Database not initialized');
  const rows = await db.getAllAsync<{ name: string }>(`PRAGMA table_info(${tableName})`);
  const cols = new Set(rows.map((r) => r.name));
  tableColumnsCache.set(tableName, cols);
  return cols;
}

function filterToKnownColumns(
  tableName: string,
  row: Record<string, unknown>,
  knownCols: Set<string>
): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(row)) {
    if (knownCols.has(k)) out[k] = v;
  }
  return out;
}

function buildWhere(where: any): { sql: string; params: unknown[] } {
  if (!where) return { sql: '1=1', params: [] };
  const conds = Array.isArray(where) ? where : [where];
  const parts: string[] = [];
  const params: unknown[] = [];

  for (const c of conds) {
    const { field, op, value, value2 } = c;
    const v = value instanceof Date ? value.toISOString() : value;
    const v2 = value2 instanceof Date ? value2.toISOString() : value2;

    switch (op) {
      case 'equals':
        parts.push(`${field} = ?`);
        params.push(v);
        break;
      case 'above':
        parts.push(`${field} > ?`);
        params.push(v);
        break;
      case 'aboveOrEqual':
        parts.push(`${field} >= ?`);
        params.push(v);
        break;
      case 'below':
        parts.push(`${field} < ?`);
        params.push(v);
        break;
      case 'belowOrEqual':
        parts.push(`${field} <= ?`);
        params.push(v);
        break;
      case 'between':
        parts.push(`${field} >= ? AND ${field} <= ?`);
        params.push(v, v2);
        break;
      case 'anyOf':
        if (Array.isArray(value) && value.length > 0) {
          parts.push(`${field} IN (${value.map(() => '?').join(',')})`);
          params.push(...value);
        } else {
          parts.push('0');
        }
        break;
      case 'like':
        parts.push(`${field} LIKE ?`);
        params.push(v);
        break;
      case 'notNull':
        parts.push(`${field} IS NOT NULL`);
        break;
      case 'isNull':
        parts.push(`${field} IS NULL`);
        break;
    }
  }
  return {
    sql: parts.length ? parts.join(' AND ') : '1=1',
    params,
  };
}

async function ensureColumn(tableName: string, columnName: string, columnDef: string) {
  if (!db) return;
  try {
    const cols = await getTableColumns(tableName);
    if (cols.has(columnName)) return;
    await db.execAsync(`ALTER TABLE ${tableName} ADD COLUMN ${columnDef}`);
    tableColumnsCache.delete(tableName);
  } catch (err) {
    console.error(`Failed to add column ${tableName}.${columnName}:`, err);
  }
}

export async function initSQLiteEngine(): Promise<void> {
  if (db) return;
  tableColumnsCache.clear();
  db = await SQLite.openDatabaseAsync('KurdishPOSDB.sqlite');
  await db.execAsync(TABLE_SCHEMAS);
  await ensureColumn('settings', 'enableCashDrawer', 'enableCashDrawer INTEGER DEFAULT 0');
  await ensureColumn('settings', 'cashDrawerPrinterName', 'cashDrawerPrinterName TEXT');
  await ensureColumn('settings', 'posDisplayMode', "posDisplayMode TEXT DEFAULT 'classic'");
}

export function isDbReady(): boolean {
  return db !== null;
}

export async function executeQuery(request: Record<string, unknown>): Promise<unknown> {
  if (!db) throw new Error('Database not initialized');
  const { type, table, id, data, where, orderBy, sortBy, first, count, items, limit } =
    request as any;
  const knownCols = await getTableColumns(table as string);

  switch (type) {
    case 'add': {
      const s = filterToKnownColumns(
        table as string,
        serializeRow(table as string, data as Record<string, unknown>),
        knownCols
      );
      delete s.id;
      const cols = Object.keys(s).filter((k) => s[k] !== undefined);
      if (cols.length === 0) throw new Error('No columns to insert');
      const vals = cols.map((k) => s[k]);
      const result = await db.runAsync(
        `INSERT INTO ${table} (${cols.join(',')}) VALUES (${cols.map(() => '?').join(',')})`,
        vals as SQLite.SQLiteBindValue[]
      );
      return result.lastInsertRowId;
    }

    case 'put': {
      const s = filterToKnownColumns(
        table as string,
        serializeRow(table as string, data as Record<string, unknown>),
        knownCols
      );
      const cols = Object.keys(s).filter((k) => s[k] !== undefined);
      const vals = cols.map((k) => s[k]);
      const result = await db.runAsync(
        `INSERT OR REPLACE INTO ${table} (${cols.join(',')}) VALUES (${cols.map(() => '?').join(',')})`,
        vals as SQLite.SQLiteBindValue[]
      );
      return result.lastInsertRowId;
    }

    case 'update': {
      const s = filterToKnownColumns(
        table as string,
        serializeRow(table as string, data as Record<string, unknown>),
        knownCols
      );
      const cols = Object.keys(s).filter((k) => k !== 'id' && s[k] !== undefined);
      if (cols.length === 0) return 0;
      const vals = [...cols.map((k) => s[k]), id];
      const result = await db.runAsync(
        `UPDATE ${table} SET ${cols.map((k) => `${k}=?`).join(',')} WHERE id=?`,
        vals as SQLite.SQLiteBindValue[]
      );
      return result.changes;
    }

    case 'delete': {
      const result = await db.runAsync(`DELETE FROM ${table} WHERE id=?`, [id as number]);
      return result.changes;
    }

    case 'get': {
      const rows = await db.getAllAsync<Record<string, unknown>>(
        `SELECT * FROM ${table} WHERE id=?`,
        [id as number]
      );
      return rows.length ? deserializeRow(table as string, rows[0]) : undefined;
    }

    case 'toArray': {
      if (count) {
        const rows = await db.getAllAsync<{ cnt: number }>(`SELECT COUNT(*) AS cnt FROM ${table}`);
        return rows[0]?.cnt ?? 0;
      }
      const rows = await db.getAllAsync<Record<string, unknown>>(`SELECT * FROM ${table}`);
      const result = rows.map((r) => deserializeRow(table as string, r));
      return first ? (result[0] ?? undefined) : result;
    }

    case 'count': {
      const rows = await db.getAllAsync<{ cnt: number }>(`SELECT COUNT(*) AS cnt FROM ${table}`);
      return rows[0]?.cnt ?? 0;
    }

    case 'clear': {
      await db.runAsync(`DELETE FROM ${table}`);
      return;
    }

    case 'where': {
      const { sql: wSql, params: wParams } = buildWhere(where);
      let sql = `SELECT * FROM ${table} WHERE ${wSql}`;

      if (count) {
        const cRows = await db.getAllAsync<{ cnt: number }>(
          `SELECT COUNT(*) AS cnt FROM ${table} WHERE ${wSql}`,
          wParams as SQLite.SQLiteBindValue[]
        );
        return cRows[0]?.cnt ?? 0;
      }

      if (sortBy) {
        const dir = (sortBy as any).reverse ? 'DESC' : 'ASC';
        sql += ` ORDER BY ${(sortBy as any).field} ${dir}`;
      } else if (orderBy) {
        const dir = (orderBy as any).reverse ? 'DESC' : 'ASC';
        sql += ` ORDER BY ${(orderBy as any).field} ${dir}`;
      }
      if (limit) sql += ` LIMIT ${limit}`;

      const rows = await db.getAllAsync<Record<string, unknown>>(
        sql,
        wParams as SQLite.SQLiteBindValue[]
      );
      const result = rows.map((r) => deserializeRow(table as string, r));
      return first ? (result[0] ?? undefined) : result;
    }

    case 'orderBy': {
      const field = (orderBy as any)?.field || 'id';
      const dir = (orderBy as any)?.reverse ? 'DESC' : 'ASC';
      let sql = `SELECT * FROM ${table} ORDER BY ${field} ${dir}`;
      if (limit) sql += ` LIMIT ${limit}`;
      const rows = await db.getAllAsync<Record<string, unknown>>(sql);
      const result = rows.map((r) => deserializeRow(table as string, r));
      return first ? (result[0] ?? undefined) : result;
    }

    case 'first': {
      const rows = await db.getAllAsync<Record<string, unknown>>(`SELECT * FROM ${table} LIMIT 1`);
      return rows.length ? deserializeRow(table as string, rows[0]) : undefined;
    }

    case 'bulkAdd': {
      if (!items || !(items as unknown[]).length) return;
      for (const item of items as Record<string, unknown>[]) {
        const s = filterToKnownColumns(
          table as string,
          serializeRow(table as string, item),
          knownCols
        );
        if (s.id === undefined || s.id === null) {
          delete s.id;
        }
        const cols = Object.keys(s).filter((k) => s[k] !== undefined);
        if (cols.length === 0) continue;
        const vals = cols.map((k) => s[k]);
        const placeholders = cols.map(() => '?').join(',');
        if (s.id != null) {
          await db.runAsync(
            `INSERT OR REPLACE INTO ${table} (${cols.join(',')}) VALUES (${placeholders})`,
            vals as SQLite.SQLiteBindValue[]
          );
        } else {
          await db.runAsync(
            `INSERT INTO ${table} (${cols.join(',')}) VALUES (${placeholders})`,
            vals as SQLite.SQLiteBindValue[]
          );
        }
      }
      return;
    }

    default:
      throw new Error(`Unknown query type: ${type}`);
  }
}
