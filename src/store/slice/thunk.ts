import { createAsyncThunk } from "@reduxjs/toolkit";
import { getConvertCurrency, getList } from "../../api/api";
import { getConvertCurrencyType } from "../../types/types";

const ALL_CURRENCY = "/getAllCurrency";
const CONVERT_CURRENCY = "/getChangeCurrency";

export const allCurrency = createAsyncThunk(ALL_CURRENCY, async () => {
  const response = await getList();
  return response.data;
});

export const covertCurrency = createAsyncThunk(
  CONVERT_CURRENCY,
  async (params: getConvertCurrencyType) => {
    try {
      const response = await getConvertCurrency(params);
      params.success && params.success();
      return response.data;
    } catch (error) {
      params.error && params.error();
    } finally {
      params.loadingEnd();
    }
  }
);
