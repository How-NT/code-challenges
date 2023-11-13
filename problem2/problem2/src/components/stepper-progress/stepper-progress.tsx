import { Box, Step, StepLabel, Stepper } from "@mui/material";
import clsx from "clsx";
import React from "react";
import StepIcon from "./step-icon";

interface StepOptions {
  id: number;
  label?: string;
  iconLabel?: string;
  dashedConnector?: boolean;
  readOnly?: boolean;
}

interface StepperProps {
  step: number;
  steps: StepOptions[];
}

const StepperProgress: React.FC<StepperProps> = ({
  steps,
  step: currentStep,
}) => {
  return (
    <Box
      pb={3}
      sx={{
        width: steps.length <= 3 ? "50%" : "100%",
      }}
    >
      <Stepper alternativeLabel>
        {steps.map((step, index) => (
          <Step
            key={step.label}
            active={step.id === currentStep}
            disabled={step.id > currentStep}
            completed={step.id < currentStep}
            className={clsx({
              "has-dashed-connector": step.dashedConnector,
              "has-success-connector": index > 0 && step.id <= currentStep,
            })}
          >
            <StepLabel
              StepIconComponent={(props) => (
                <StepIcon {...props} label={step.iconLabel} />
              )}
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export type { StepOptions };
export { StepperProgress };
