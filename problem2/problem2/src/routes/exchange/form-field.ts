export const FORM_FIELDS = {
  EXCHANGE_PAIR: {
    EXCHANGE_FROM: {
      id: "exchange_from" as const,
      name: "exchange_from" as const,
      label: "You send",
      requiredMessage: "Please select!",
    },
    EXCHANGE_FROM_AMOUNT: {
      id: "exchange_from_amount" as const,
      name: "exchange_from_amount" as const,
      label: "You send",
      min: 0,
      requiredMessage: "Please enter amount!",
      invalidMessage: "The amount must be a positive number",
    },
    EXCHANGE_TO: {
      id: "exchange_to" as const,
      name: "exchange_to" as const,
      label: "You receive",
      requiredMessage: "Please select!",
    },
    EXCHANGE_TO_AMOUNT: {
      id: "exchange_to_amount" as const,
      name: "exchange_to_amount" as const,
      label: "You receive",
    },
    EXCHANGE_TYPE: {
      id: "fixed" as const,
      name: "fixed" as const,
    },
  },
  WALLET_ADDRESS: {
    EXCHANGE_RECIPIENT_ADDRESS: {
      id: "exchange_recipient_address" as const,
      name: "exchange_recipient_address" as const,
      label: "Recipient address",
      requiredMessage: "Please enter Recipient address",
      invalidMessage: "Invalid Recipient address",
      tooltip: "Destination wallet address",
    },
    EXCHANGE_REFUND_ADDRESS: {
      id: "exchange_refund_address" as const,
      name: "exchange_refund_address" as const,
      label: "Refund address",
      requiredMessage: "Please enter Refund address",
      invalidMessage: "Invalid Refund address",
      tooltip: "Refund wallet address",
    },
  },
  PAYMENT: {},
  EXCHANGE: {},
};
