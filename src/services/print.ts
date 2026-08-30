import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';

export async function printHtml(html: string): Promise<void> {
  await Print.printAsync({ html });
}

export async function sharePdfFromHtml(html: string, filename = 'receipt.pdf'): Promise<void> {
  const { uri } = await Print.printToFileAsync({ html });
  if (await Sharing.isAvailableAsync()) {
    await Sharing.shareAsync(uri, { mimeType: 'application/pdf', dialogTitle: filename });
  }
}

export function buildReceiptHtml(opts: {
  shopName: string;
  shopPhone?: string;
  items: { name: string; qty: number; price: number; total: number }[];
  total: number;
  paid: number;
  invoiceNumber?: string;
}): string {
  const rows = opts.items
    .map(
      (i) =>
        `<tr><td>${i.name}</td><td>${i.qty}</td><td>${i.price.toLocaleString()}</td><td>${i.total.toLocaleString()}</td></tr>`
    )
    .join('');
  return `<!DOCTYPE html><html dir="rtl"><head><meta charset="utf-8"/><style>
    body{font-family:sans-serif;padding:16px} table{width:100%;border-collapse:collapse}
    td,th{border:1px solid #ccc;padding:4px;text-align:right}
  </style></head><body>
    <h2>${opts.shopName}</h2>
    ${opts.shopPhone ? `<p>${opts.shopPhone}</p>` : ''}
    ${opts.invoiceNumber ? `<p>وەسڵ: ${opts.invoiceNumber}</p>` : ''}
    <table><thead><tr><th>کاڵا</th><th>بڕ</th><th>نرخ</th><th>کۆ</th></tr></thead><tbody>${rows}</tbody></table>
    <p><strong>کۆ: ${opts.total.toLocaleString()} د.ع</strong></p>
    <p>دراو: ${opts.paid.toLocaleString()} د.ع</p>
  </body></html>`;
}
