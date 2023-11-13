import * as Yup from "yup";
import { FORM_FIELDS } from "./form-field";
const {
  EXCHANGE_PAIR: {
    EXCHANGE_FROM,
    EXCHANGE_FROM_AMOUNT,
    EXCHANGE_TO,
    EXCHANGE_TO_AMOUNT,
    EXCHANGE_TYPE,
  },
  WALLET_ADDRESS: { EXCHANGE_RECIPIENT_ADDRESS, EXCHANGE_REFUND_ADDRESS },
} = FORM_FIELDS;

export const ExchangeValidationSchemaStep1 = Yup.object({
  [EXCHANGE_FROM.name]: Yup.string()
    .required(EXCHANGE_FROM.requiredMessage)
    .nullable(),
  [EXCHANGE_FROM_AMOUNT.name]: Yup.number()
    .required(EXCHANGE_FROM_AMOUNT.requiredMessage)
    .typeError(EXCHANGE_FROM_AMOUNT.invalidMessage)
    .moreThan(EXCHANGE_FROM_AMOUNT.min, EXCHANGE_FROM_AMOUNT.invalidMessage)
    .nullable(),
  [EXCHANGE_TO.name]: Yup.string()
    .required(EXCHANGE_TO.requiredMessage)
    .nullable(),
  [EXCHANGE_TO_AMOUNT.name]: Yup.number()
    .required(EXCHANGE_FROM.requiredMessage)
    .nullable(),
  [EXCHANGE_TYPE.name]: Yup.boolean()
    .required(EXCHANGE_FROM.requiredMessage)
    .nullable(),
});

export const ExchangeValidationSchemaStep2 = Yup.object({
  [EXCHANGE_RECIPIENT_ADDRESS.name]: Yup.string()
    .required(EXCHANGE_RECIPIENT_ADDRESS.requiredMessage)
    .nullable(),
  [EXCHANGE_REFUND_ADDRESS.name]: Yup.string()
    .required(EXCHANGE_REFUND_ADDRESS.requiredMessage)
    .nullable(),
});

export const ExchangeValidationSchemaStep3 = Yup.object({});
export const ExchangeValidationSchemaStep4 = Yup.object({});

export const ExchangeValidationSchema = [
  ExchangeValidationSchemaStep1,
  ExchangeValidationSchemaStep2,
  ExchangeValidationSchemaStep3,
  ExchangeValidationSchemaStep4,
];

export const AllExchangeValidationSchema = ExchangeValidationSchemaStep1.shape({
  ...ExchangeValidationSchemaStep2.fields,
  ...ExchangeValidationSchemaStep3.fields,
  ...ExchangeValidationSchemaStep4.fields,
});

export type ExchangeFormValues = Yup.InferType<
  typeof AllExchangeValidationSchema
>;
