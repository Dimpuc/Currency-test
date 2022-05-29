export interface CurrencyType {
  AED: string;
  AFN: string;
  ALL: string;
  AMD: string;
  ANG: string;
  AOA: string;
  ARS: string;
  AUD: string;
  AWG: string;
  AZN: string;
  BAM: string;
  BBD: string;
  BDT: string;
}

export interface getConvertCurrencyType {
  to: string;
  from: string;
  amount: string;
  success: () => void;
  error: () => void;
  loadingEnd: () => void;
}

export type CurrencyArrayType = [string, string];
