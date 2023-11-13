import { StepOptions } from "components/stepper-progress";
import { ExchangePairStep1 } from "./step-1-exchange-pair";
import { WalletAddressStep2 } from "./step-2-wallet-address";
import { PaymentStep3 } from "./step-3-payment";
import { ExchangeStep4 } from "./step-4-exchange";

export const EXCHANGE_STEPS: Record<string, StepOptions> = {
  EXCHANGE_PAIR: {
    id: 1,
    label: "Exchange pair",
    iconLabel: "1",
  },
  WALLET_ADDRESS: {
    id: 2,
    label: "Wallet address",
    iconLabel: "2",
    readOnly: true,
  },
  PAYMENT: {
    id: 3,
    label: "Payment",
    iconLabel: "3",
    readOnly: true,
  },
  EXCHANGE: {
    id: 4,
    label: "Exchange",
    iconLabel: "4",
  },
};

export const exchangeSteps = [
  EXCHANGE_STEPS.EXCHANGE_PAIR,
  EXCHANGE_STEPS.WALLET_ADDRESS,
  EXCHANGE_STEPS.PAYMENT,
  EXCHANGE_STEPS.EXCHANGE,
];

export const exchangeStepsMapper: Record<number, React.FC> = {
  1: ExchangePairStep1,
  2: WalletAddressStep2,
  3: PaymentStep3,
  4: ExchangeStep4,
};
