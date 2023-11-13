import SyncAltIcon from "@mui/icons-material/SyncAlt";
import { IconButton } from "@mui/material";
import { useFormikContext } from "formik";
import { ExchangeFormValues } from "../exchangeValidationSchema";
import { FORM_FIELDS } from "../form-field";

const {
  EXCHANGE_PAIR: { EXCHANGE_FROM, EXCHANGE_TO },
} = FORM_FIELDS;
export const ExchangeAction: React.FC = () => {
  const { values, setFieldValue } = useFormikContext<ExchangeFormValues>();

  const handleExchangeRate = () => {
    setFieldValue(EXCHANGE_FROM.name, values[EXCHANGE_TO.name]);
    setFieldValue(EXCHANGE_TO.name, values[EXCHANGE_FROM.name]);
  };

  return (
    <IconButton onClick={handleExchangeRate}>
      <SyncAltIcon fontSize="small" sx={{ transform: "rotate(90deg)" }} />
    </IconButton>
  );
};
