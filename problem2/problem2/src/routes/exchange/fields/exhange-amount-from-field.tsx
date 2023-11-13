import { TextField } from "@mui/material";
import { useField } from "formik";
import { FORM_FIELDS } from "../form-field";
const {
  EXCHANGE_PAIR: { EXCHANGE_FROM_AMOUNT, EXCHANGE_TO_AMOUNT },
} = FORM_FIELDS;

export const ExchangeAmountFromField: React.FC = () => {
  const [field, meta, { setValue }] = useField(EXCHANGE_FROM_AMOUNT.name);
  const [, , { setValue: setExchangeToValue }] = useField(
    EXCHANGE_TO_AMOUNT.name
  );

  return (
    <TextField
      type="number"
      name={EXCHANGE_FROM_AMOUNT.name}
      label={EXCHANGE_FROM_AMOUNT.label}
      onClick={(event) => {
        event.stopPropagation();
      }}
      value={field.value ?? ""}
      InputLabelProps={{ shrink: true }}
      onChange={(event) => {
        setValue(event.target.value);
        setExchangeToValue(null);
      }}
      error={Boolean(meta.error)}
    />
  );
};
