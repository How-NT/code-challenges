import { Box, Stack } from "@mui/material";
import { StepperProgress } from "components/stepper-progress";
import { useExchangeQueryParams } from "hooks/exchange-params";
import { ExchangeForm } from "./exchange-form";
import { ExchangeProvider } from "./exchange-provider";
import { exchangeSteps } from "./step-mapping";

export const Exchange: React.FC = () => {
  const { queryParams } = useExchangeQueryParams();

  return (
    <Stack px={10} py={5} width="800px" sx={{ margin: "0 auto" }}>
      <StepperProgress steps={exchangeSteps} step={queryParams.step} />

      <Box px={10} py={4} pr={8} sx={{ backgroundColor: "grey.200" }}>
        <ExchangeProvider>
          <ExchangeForm />
        </ExchangeProvider>
      </Box>
    </Stack>
  );
};
