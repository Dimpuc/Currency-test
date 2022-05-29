import { createSlice } from "@reduxjs/toolkit";
import { CurrencyType } from "../../types/types";
import { allCurrency, covertCurrency } from "./thunk";

interface CurrencyState {
  allCurrency: CurrencyType | null;
  result: number;
}

const initialState: CurrencyState = {
  allCurrency: null,
  result: 0,
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(allCurrency.fulfilled, (state, action) => {
      state.allCurrency = action.payload.symbols;
    });
    builder.addCase(covertCurrency.fulfilled, (state, action) => {
      state.result = action.payload.result;
    });
  },
});

export default currencySlice.reducer;
