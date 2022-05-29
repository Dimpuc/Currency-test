import * as Yup from "yup";

const reg = /^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/;

export const validationSchema = Yup.object().shape({
  amount: Yup.string().matches(reg, "Amount should be more than 0"),
});
