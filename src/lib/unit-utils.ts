import type { Product } from '../db/db';

/**
 * وەرگرتنی چەند دانە (دانەی بنەڕەت) لە یەک یەکە.
 * بۆ کاڵای دانە+پارچە+کارتۆن: ١ دانە=١، ١ پارچە=١٢ دانە، ١ کارتۆن=٢٤ پارچە=٢٨٨ دانە.
 * لە داتابەیس کارتۆن بە "چەند پارچە" هەڵدەگیرێت (٢٤)، نەک چەند دانە (٢٨٨).
 *
 * گرنگ: زنجیرەکە بە ڕیزی `product.units` وەک لە تۆمارکردندا پاشەکەوت دەکرێت
 * (پارچە پاشان کارتۆن) — نەک بە سۆرتکردنی ژمارەی quantity
 * (چونکە ٢٤ پارچە لە کارتۆن دەکرێت بچووکتر بێت لە ١٢ دانە لە پارچە).
 */
export function getUnitToBaseMultiplier(product: Product, unitName: string): number {
  const baseUnit = product.baseUnit;
  if (!unitName || unitName === baseUnit) return 1;

  const units = product.units || [];
  const unitObj = units.find((u) => u.name === unitName);
  if (!unitObj) return 1;

  const q = Number(unitObj.quantity || 0);
  if (!isFinite(q) || q <= 0) return 1;

  if (units.length === 1) {
    return q;
  }

  // Hierarchy = order saved in product.units (package then carton, etc.)
  let mult = 1;
  for (const u of units) {
    const uq = Number(u.quantity || 0);
    if (!isFinite(uq) || uq <= 0) continue;
    mult *= uq;
    if (u.name === unitName) {
      return mult || 1;
    }
  }

  return q;
}

/** گەورەترین یەکە (کارتۆن ئەگەر هەبێت) */
export function getLargestUnitName(product: Product): string {
  const baseUnit = product.baseUnit || '';
  const units = product.units || [];
  if (!units.length) return baseUnit;
  let bestName = units[0].name;
  let bestMult = getUnitToBaseMultiplier(product, bestName);
  for (const u of units) {
    const mult = getUnitToBaseMultiplier(product, u.name);
    if (mult >= bestMult) {
      bestMult = mult;
      bestName = u.name;
    }
  }
  return bestName || baseUnit;
}

/** لیستی یەکەکان بۆ UI: دانە + units بە multiplier */
export function getProductUnitOptions(
  product: Product
): { name: string; mult: number }[] {
  const base = product.baseUnit || 'دانە';
  const list: { name: string; mult: number }[] = [{ name: base, mult: 1 }];
  for (const u of product.units || []) {
    const mult = getUnitToBaseMultiplier(product, u.name);
    if (mult > 0) list.push({ name: u.name, mult });
  }
  return list;
}

/** نرخی کڕین بۆ ١ دانەی بنەڕەت (product.cost بە گەورەترین یەکە هەڵگیراوە) */
export function getCostPerBaseUnit(product: Product): number {
  const largest = getLargestUnitName(product);
  const mult = getUnitToBaseMultiplier(product, largest) || 1;
  return (Number(product.cost) || 0) / mult;
}

/** بڕی ناو کۆگا بە یەکەی دیاریکراو */
export function convertBaseQuantityToUnit(
  baseQuantity: number,
  product: Product,
  unitName: string
): number {
  const mult = getUnitToBaseMultiplier(product, unitName) || 1;
  if (mult <= 1) return Number(baseQuantity) || 0;
  return (Number(baseQuantity) || 0) / mult;
}

/** بڕ لە یەکەی دیاریکراو → دانەی بنەڕەت */
export function convertUnitQuantityToBase(
  unitQuantity: number,
  product: Product,
  unitName: string
): number {
  const mult = getUnitToBaseMultiplier(product, unitName) || 1;
  return (Number(unitQuantity) || 0) * mult;
}

/** دانەی نرخی کڕین لە تۆمارکردنی کاڵا: کارتۆن ئەگەر هەبێت، ئەلا پارچە، ئەلا دانە */
export function getProductCostUnit(
  product: Product,
  unitLabels: { carton: string; package: string }
): string {
  const units = product.units || [];
  const hasCarton = units.some((u) => u.name === unitLabels.carton);
  const hasPackage = units.some((u) => u.name === unitLabels.package);
  if (hasCarton) return unitLabels.carton;
  if (hasPackage) return unitLabels.package;
  return product.baseUnit || '';
}

/** نرخی کڕین گۆڕدراو بۆ دانەی دیاریکراو، یەکسان لەگەڵ تۆمارکردنی کاڵا (نرخ بۆ دانەی گەورە) */
export function getProductCostForUnit(
  product: Product,
  forUnitName: string,
  unitLabels: { carton: string; package: string }
): number {
  const costUnit = getProductCostUnit(product, unitLabels);
  const costMult = getUnitToBaseMultiplier(product, costUnit);
  const forMult = getUnitToBaseMultiplier(product, forUnitName);
  if (costMult === 0) return product.cost || 0;
  return (product.cost || 0) * (forMult / costMult);
}
