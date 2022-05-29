import axios from "axios";
import { getConvertCurrencyType } from "../types/types";

const apiKey = "AgmHg87dObqfdEqRBhaJu3NJIaOdYaxd";

export const getList = () => {
  return axios({
    method: "GET",
    url: "https://api.apilayer.com/fixer/symbols",
    headers: {
      "Content-Type": "application/json",
      apikey: apiKey,
    },
  });
};

export const getConvertCurrency = (params: getConvertCurrencyType) => {
  return axios({
    method: "GET",
    url: `https://api.apilayer.com/fixer/convert?to=${params.to}&from=${params.from}&amount=${params.amount}`,
    headers: {
      "Content-Type": "application/json",
      apikey: apiKey,
    },
  });
};
