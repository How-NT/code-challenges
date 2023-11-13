import InfoIcon from "@mui/icons-material/Info";
import {
  Stack,
  TextField,
  TextFieldProps,
  Tooltip,
  Typography,
} from "@mui/material";
import { useField, useFormikContext } from "formik";
import { ExchangeFormValues } from "../exchangeValidationSchema";
import { FORM_FIELDS } from "../form-field";
import { isRecipientAddressField } from "../utils";
const {
  EXCHANGE_PAIR: { EXCHANGE_FROM, EXCHANGE_TO },
} = FORM_FIELDS;
export const WalletAddressField: React.FC<
  TextFieldProps & { tooltip?: string }
> = ({ name, label, tooltip }) => {
  const [field, meta, { setValue }] = useField(name);
  const { values } = useFormikContext<ExchangeFormValues>();
  return (
    <Stack>
      <Stack alignItems="center" gap={0.25} direction="row" pb={0.5}>
        <Typography variant="caption">{label}</Typography>
        <Tooltip title={tooltip} followCursor>
          <InfoIcon
            color="warning"
            fontSize="inherit"
            sx={{ cursor: "help" }}
          />
        </Tooltip>
      </Stack>
      <TextField
        name={name}
        value={field.value ?? ""}
        InputLabelProps={{ shrink: true }}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        placeholder={
          isRecipientAddressField(name)
            ? `Enter your ${values[
                EXCHANGE_TO.name
              ].toUpperCase()} recipient address`
            : `Enter your ${values[
                EXCHANGE_FROM.name
              ].toUpperCase()} refund address`
        }
        error={Boolean(meta.error)}
        helperText={meta.error}
      />
    </Stack>
  );
};
