/**
 * Pure financial helpers for installment sale paid/remaining (IQD base storage).
 * No React / DB side effects — unit-testable.
 *
 * Model (BUG-C01):
 * - sale.total / sale.paid / sale.remaining are always IQD
 * - installmentDownPayment UI may be IQD or USD (installmentCurrency)
 * - USD down payments must be converted with the sale-time exchange rate before writing sale fields
 */

export type PaymentCurrencyCode = 'IQD' | 'USD';

export class InstallmentFinanceError extends Error {
  readonly code: string;

  constructor(message: string, code: string) {
    super(message);
    this.name = 'InstallmentFinanceError';
    this.code = code;
  }
}

/** IQD: whole dinars (matches POS formatPrice IQD display). */
export function roundMoneyIqd(value: number): number {
  return Math.round(value);
}

/** USD: 3 decimal places (matches currency-context USD formatting). */
export function roundMoneyUsd(value: number): number {
  return Math.round(value * 1000) / 1000;
}

export function assertValidExchangeRate(rate: number): number {
  if (!Number.isFinite(rate) || rate <= 0) {
    throw new InstallmentFinanceError(
      'Invalid or missing exchange rate for USD payment',
      'INVALID_RATE'
    );
  }
  return rate;
}

/**
 * Convert an amount in `currency` to IQD using `exchangeRate` (IQD per 1 USD).
 */
export function convertAmountToIqd(
  amount: number,
  currency: PaymentCurrencyCode,
  exchangeRate: number
): number {
  if (!Number.isFinite(amount) || amount < 0) {
    throw new InstallmentFinanceError('Invalid payment amount', 'INVALID_AMOUNT');
  }
  if (currency === 'IQD') {
    return roundMoneyIqd(amount);
  }
  const rate = assertValidExchangeRate(exchangeRate);
  return roundMoneyIqd(amount * rate);
}

export interface InstallmentSalePaymentInput {
  /** Sale total already in IQD (cart calculateTotal). */
  saleTotalIqd: number;
  /** Down payment as entered by the user (may be USD or IQD). */
  downPaymentOriginal: number;
  /** Currency of downPaymentOriginal. */
  downPaymentCurrency: PaymentCurrencyCode;
  /** IQD per 1 USD at sale completion time. Required when downPaymentCurrency is USD. */
  saleExchangeRate: number;
}

export interface InstallmentSalePaymentResult {
  downPaymentOriginal: number;
  downPaymentCurrency: PaymentCurrencyCode;
  saleExchangeRate: number;
  downPaymentInIqd: number;
  paidIqd: number;
  remainingIqd: number;
}

/**
 * Compute IQD paid/remaining for an installment sale.
 * Never compares USD amounts directly to IQD totals.
 */
export function calculateInstallmentSalePayment(
  input: InstallmentSalePaymentInput
): InstallmentSalePaymentResult {
  const { saleTotalIqd, downPaymentOriginal, downPaymentCurrency, saleExchangeRate } = input;

  if (!Number.isFinite(saleTotalIqd) || saleTotalIqd < 0) {
    throw new InstallmentFinanceError('Invalid sale total', 'INVALID_TOTAL');
  }
  if (!Number.isFinite(downPaymentOriginal) || downPaymentOriginal < 0) {
    throw new InstallmentFinanceError('Negative or invalid down payment', 'INVALID_DOWN_PAYMENT');
  }

  const totalIqd = roundMoneyIqd(saleTotalIqd);
  const rateForSnapshot =
    downPaymentCurrency === 'USD'
      ? assertValidExchangeRate(saleExchangeRate)
      : Number.isFinite(saleExchangeRate) && saleExchangeRate > 0
        ? saleExchangeRate
        : saleExchangeRate;

  if (downPaymentCurrency === 'USD') {
    assertValidExchangeRate(saleExchangeRate);
  }

  const downPaymentInIqd = convertAmountToIqd(
    downPaymentOriginal,
    downPaymentCurrency,
    saleExchangeRate
  );

  // Existing business rule: down payment must be strictly less than total (leave an installment balance).
  if (downPaymentInIqd >= totalIqd) {
    throw new InstallmentFinanceError(
      'Down payment must be less than the sale total',
      'DOWN_PAYMENT_TOO_LARGE'
    );
  }

  const paidIqd = Math.min(downPaymentInIqd, totalIqd);
  const remainingIqd = Math.max(totalIqd - paidIqd, 0);

  if (paidIqd + remainingIqd !== totalIqd) {
    throw new InstallmentFinanceError(
      'paid + remaining must equal sale total',
      'IDENTITY_BROKEN'
    );
  }

  return {
    downPaymentOriginal:
      downPaymentCurrency === 'USD'
        ? roundMoneyUsd(downPaymentOriginal)
        : roundMoneyIqd(downPaymentOriginal),
    downPaymentCurrency,
    saleExchangeRate: rateForSnapshot,
    downPaymentInIqd,
    paidIqd,
    remainingIqd,
  };
}

/**
 * Debt ownership: customer.debt is increased only from sale.remaining (IQD) in addSale/updateSale.
 * Creating an installment schedule must never increase customer debt again (BUG-C02).
 */
export function shouldIncreaseCustomerDebtOnInstallmentCreate(): boolean {
  return false;
}

/**
 * Expected one-time customer debt increase for a credit/installment sale (IQD).
 */
export function expectedCustomerDebtIncreaseIqd(saleRemainingIqd: number): number {
  if (!Number.isFinite(saleRemainingIqd) || saleRemainingIqd <= 0) {
    return 0;
  }
  return roundMoneyIqd(saleRemainingIqd);
}
