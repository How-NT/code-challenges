import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import { Form } from "formik";
import { useExchangeNavigation } from "hooks/exchange-navigation";
import { useExchangeQueryParams } from "hooks/exchange-params";
import { ExchangeStepper } from "./stepper";

export const ExchangeForm: React.FC = () => {
  const { queryParams } = useExchangeQueryParams();
  const { goPrevStep } = useExchangeNavigation();
  const handleGoBack = () => {
    goPrevStep();
  };

  return (
    <Form id="exchange-form" aria-label="Exchange form" noValidate>
      <Stack direction="column" sx={{ justifyContent: "space-between" }}>
        <ExchangeStepper step={queryParams.step} />
        <Stack
          direction="row"
          justifyContent={queryParams.step !== 1 ? "space-between" : "flex-end"}
          pt={2}
          pr={2}
        >
          {queryParams.step !== 1 && (
            <Button
              startIcon={<ArrowBack />}
              variant="contained"
              sx={{
                backgroundColor: "primary.contrastText",
                color: "info.main",
                "&:hover": {
                  backgroundColor: "grey.100",
                },
              }}
              onClick={handleGoBack}
            >
              Back
            </Button>
          )}

          <LoadingButton
            form="exchange-form"
            type="submit"
            color="primary"
            variant="contained"
            disabled={queryParams.step === 4}
            sx={{ fontSize: "16px" }}
            endIcon={<ArrowForward />}
          >
            {queryParams.step === 4 ? "Finish" : "Continue"}
          </LoadingButton>
        </Stack>
      </Stack>
    </Form>
  );
};
