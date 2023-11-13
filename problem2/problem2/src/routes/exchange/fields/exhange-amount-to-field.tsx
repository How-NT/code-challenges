import { InputAdornment, TextField } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useExchangeCurrency } from "api/coin";
import { REFETCH_TIME } from "constants/api";
import { useField, useFormikContext } from "formik";
import { ExchangeFormValues } from "../exchangeValidationSchema";
import { FORM_FIELDS } from "../form-field";
const {
  EXCHANGE_PAIR: {
    EXCHANGE_FROM,
    EXCHANGE_TO,
    EXCHANGE_FROM_AMOUNT,
    EXCHANGE_TO_AMOUNT,
    EXCHANGE_TYPE,
  },
} = FORM_FIELDS;

export const ExchangeAmountToField: React.FC = () => {
  const [field, meta] = useField(EXCHANGE_TO_AMOUNT.name);

  const { values, setFieldValue } = useFormikContext<ExchangeFormValues>();
  const { isLoading, isFetching } = useExchangeCurrency(
    {
      currencyFrom: values[EXCHANGE_FROM.name],
      currencyTo: values[EXCHANGE_TO.name],
      amount: values[EXCHANGE_FROM_AMOUNT.name],
      fixed: !!values[EXCHANGE_TYPE.name],
      site: true,
    },
    {
      enabled:
        !!values[EXCHANGE_FROM.name] &&
        !!values[EXCHANGE_TO.name] &&
        values[EXCHANGE_FROM_AMOUNT.name] > 0,
      refetchInterval: REFETCH_TIME,
      staleTime: 1000,
      onSuccess: (data) => {
        setFieldValue(EXCHANGE_TO_AMOUNT.name, Number(data));
      },
    }
  );

  return (
    <TextField
      type="number"
      name={EXCHANGE_TO_AMOUNT.name}
      label={EXCHANGE_TO_AMOUNT.label}
      onClick={(event) => {
        event.stopPropagation();
      }}
      value={isFetching || isLoading ? "" : field.value || ""}
      InputLabelProps={{ shrink: true }}
      onChange={(event) =>
        setFieldValue(EXCHANGE_TO_AMOUNT.name, Number(event.target.value))
      }
      disabled
      placeholder={isFetching || isLoading ? "..." : ""}
      InputProps={
        isLoading || isFetching
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <CircularProgress
                    color="inherit"
                    sx={{
                      width: "24px !important",
                      height: "24px !important",
                    }}
                  />
                </InputAdornment>
              ),
            }
          : {}
      }
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  );
};
