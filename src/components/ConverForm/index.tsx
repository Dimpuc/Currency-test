import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { useAppSelector } from "../../store/store";
import { covertCurrency } from "../../store/slice/thunk";
import { useAppDispatch } from "../../store/store";

import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import { validationSchema } from "./validation";

import { useLoader } from "../../hooks/useLoader";
import { Loader } from "../Loader/Loader";

// import { allCurrency } from "../../mocked/mocked";
import { CurrencyArrayType } from "../../types/types";
import { colors } from "../../static/colors";

import * as S from "./styled";

export const ConvertForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const { isLoading, loadingEnd, loadingStart } = useLoader();
  const dispatch = useAppDispatch();
  const allCurrency = useAppSelector(
    (state) => state.currencySlice.allCurrency
  );

  const result = useAppSelector((state) => state.currencySlice.result);
  const nameCurrencyAllow =
    allCurrency && Object.values(allCurrency).slice(0, 13);

  const formatterNameCurrencies = (nameCurrency: string) => {
    let currencyShortName = "";
    const allCurrencyArray =
      allCurrency && [Object.entries(allCurrency)].slice(0, 13);
    allCurrencyArray &&
      allCurrencyArray.map((currencyArray: CurrencyArrayType[]) => {
        currencyArray.map((currency: CurrencyArrayType) => {
          const isThisName = currency.find(
            (name: string) => name === nameCurrency
          );
          if (isThisName) {
            currencyShortName = currency[0];
          }
        });
      });
    return currencyShortName;
  };

  const toasterSuccess = () => toast.success("Success");
  const toasterError = () => toast.error("Error");

  const onSubmit = (data: any) => {
    loadingStart();
    dispatch(
      covertCurrency({
        from: formatterNameCurrencies(data.from),
        to: formatterNameCurrencies(data.to),
        amount: data.amount,
        success: toasterSuccess,
        error: toasterError,
        loadingEnd: loadingEnd,
      })
    );
  };

  const showInputResult = () => {
    if (result) {
      return (
        <S.WrapperInput>
          <S.Label>Result</S.Label>
          <S.Input value={result} />
        </S.WrapperInput>
      );
    } else {
      return <></>;
    }
  };
  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)} id="currencyForm">
        <S.WrapperInput>
          <S.Label>Amount</S.Label>
          <S.Input
            type="number"
            {...register("amount", { required: true })}
            borderColor={!isValid ? `${colors.mainRed}` : ""}
          />
          <ErrorMessage
            errors={errors}
            name="amount"
            render={({ message }) => <S.Error>{message}</S.Error>}
          />
        </S.WrapperInput>
        <S.WrapperInput>
          <S.Label>From</S.Label>
          <S.Select {...register("from")} id="from">
            {nameCurrencyAllow &&
              nameCurrencyAllow.map((name: string, index: number) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
          </S.Select>
        </S.WrapperInput>
        <S.WrapperInput>
          <S.Label>To</S.Label>
          <S.Select {...register("to")} id="to">
            {nameCurrencyAllow &&
              nameCurrencyAllow.map((name: string, index: number) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
          </S.Select>
        </S.WrapperInput>
        {isLoading ? (
          <S.WrapperLoader>
            <Loader />
          </S.WrapperLoader>
        ) : (
          showInputResult()
        )}
        <S.ButtonWrapper>
          <S.Button bgColor={!isValid ? `${colors.secondaryGrey}` : ""}>
            Convert
          </S.Button>
        </S.ButtonWrapper>
      </S.Form>
    </S.Container>
  );
};
