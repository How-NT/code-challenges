import React from "react";
import { exchangeStepsMapper } from "./step-mapping";

export interface StepperProps {
  step: number;
}

export const ExchangeStepper: React.FC<StepperProps> = ({ step, ...props }) => {
  const Component = exchangeStepsMapper[step] || null;
  return <Component {...props} />;
};
