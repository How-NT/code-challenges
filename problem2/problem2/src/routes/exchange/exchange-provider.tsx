import { Formik, FormikErrors, FormikHelpers, yupToFormErrors } from "formik";
import { useExchangeNavigation } from "hooks/exchange-navigation";
import { useExchangeQueryParams } from "hooks/exchange-params";
import { PropsWithChildren } from "react";
import {
  ExchangeFormValues,
  ExchangeValidationSchema,
} from "./exchangeValidationSchema";

export const ExchangeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const initValues = {
    exchange_from: "btc",
    exchange_from_amount: 0.1,
    exchange_to: "eth",
    exchange_to_amount: null as null,
    fixed: false,
  };
  const { goNextStep } = useExchangeNavigation();
  const { queryParams } = useExchangeQueryParams();
  const handleOnSubmit = (
    values: ExchangeFormValues,
    formHelpers: FormikHelpers<ExchangeFormValues>
  ) => {
    goNextStep();
  };
  return (
    <Formik
      initialValues={initValues}
      onSubmit={handleOnSubmit}
      validate={(values) => {
        return ExchangeValidationSchema[queryParams.step - 1]
          .validate(values, { abortEarly: false })
          .then(() => ({}))
          .catch((errors: FormikErrors<ExchangeFormValues>) => {
            const formikErrors = yupToFormErrors(errors);
            return formikErrors;
          });
      }}
    >
      {children}
    </Formik>
  );
};
