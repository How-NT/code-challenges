import { FORM_FIELDS } from "../form-field";

const {
  EXCHANGE_PAIR: { EXCHANGE_FROM, EXCHANGE_TO },
  WALLET_ADDRESS: { EXCHANGE_RECIPIENT_ADDRESS },
} = FORM_FIELDS;
export const isExchangeFromField = (field: string) =>
  field?.toLowerCase() === EXCHANGE_FROM.name.toLowerCase();

export const isExchangeToField = (field: string) =>
  field?.toLowerCase() === EXCHANGE_TO.name.toLowerCase();

export const isRecipientAddressField = (field: string) =>
  field?.toLowerCase() === EXCHANGE_RECIPIENT_ADDRESS.name.toLowerCase();
