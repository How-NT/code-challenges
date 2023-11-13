import InfoIcon from "@mui/icons-material/Info";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useExchangeCurrency } from "api/coin";
import { REFETCH_TIME } from "constants/api";
import { useField, useFormikContext } from "formik";
import { ExchangeFormValues } from "../exchangeValidationSchema";
import { FORM_FIELDS } from "../form-field";

const {
  EXCHANGE_PAIR: {
    EXCHANGE_TYPE,
    EXCHANGE_FROM,
    EXCHANGE_TO,
    EXCHANGE_FROM_AMOUNT,
  },
} = FORM_FIELDS;
const listOptions = [
  {
    title: "Floating rate",
    subTitle:
      "The floating rate can change at any point due to market conditions, so you might receive more or less crypto than expected.",
    isFixed: false,
  },
  {
    title: "Fixed rate",
    subTitle:
      "With the fixed rate, you will receive the exact amount of crypto you see on this screen.",
    isFixed: true,
  },
];

export const ListExchangeTypeOptionsField: React.FC = () => {
  const { values } = useFormikContext<ExchangeFormValues>();
  const [field, , { setValue }] = useField(EXCHANGE_TYPE.name);
  const { data: fixedRate, isFetching: isFetchingRate } = useExchangeCurrency(
    {
      currencyFrom: values[EXCHANGE_FROM.name],
      currencyTo: values[EXCHANGE_TO.name],
      amount: values[EXCHANGE_FROM_AMOUNT.name],
      fixed: true,
      site: true,
    },
    {
      enabled:
        !!values[EXCHANGE_FROM.name] &&
        !!values[EXCHANGE_TO.name] &&
        values[EXCHANGE_FROM_AMOUNT.name] > 0,
      keepPreviousData: true,
      refetchInterval: REFETCH_TIME,
    }
  );
  const { data: floatRate, isFetching } = useExchangeCurrency(
    {
      currencyFrom: values[EXCHANGE_FROM.name],
      currencyTo: values[EXCHANGE_TO.name],
      amount: values[EXCHANGE_FROM_AMOUNT.name],
      fixed: false,
      site: true,
    },
    {
      enabled:
        !!values[EXCHANGE_FROM.name] &&
        !!values[EXCHANGE_TO.name] &&
        values[EXCHANGE_FROM_AMOUNT.name] > 0,
      keepPreviousData: true,

      refetchInterval: REFETCH_TIME,
    }
  );

  return (
    <Stack direction="column" gap={2}>
      {listOptions.map((item, index) => {
        return (
          <Stack
            key={index}
            px={2}
            py={2}
            direction="row"
            justifyContent="space-between"
            onClick={() => setValue(item.isFixed)}
            sx={{
              border:
                field.value === item.isFixed
                  ? "2px solid #3ED8C3"
                  : "2px solid #f0f1f1",
              borderRadius: "8px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "grey.200",
              },
            }}
          >
            <Stack direction="row" gap={1} alignItems="center">
              {item.isFixed ? <LockOutlinedIcon /> : <LockOpenOutlinedIcon />}
              {item.title}
            </Stack>

            {isFetching && isFetchingRate && <Typography>...</Typography>}

            {!(isFetching && isFetchingRate) && (
              <Typography>
                {item.isFixed
                  ? fixedRate
                    ? fixedRate?.toString()
                    : ""
                  : floatRate && !!Number(values[EXCHANGE_FROM_AMOUNT.name])
                  ? `~${floatRate}`
                  : ""}
              </Typography>
            )}
          </Stack>
        );
      })}

      <Stack direction="row" gap={1} alignItems="flex-start">
        <InfoIcon
          color="warning"
          fontSize="inherit"
          sx={{ cursor: "help", pt: 0.5 }}
        />

        <Typography variant="caption">
          {field.value ? listOptions[1].subTitle : listOptions[0].subTitle}
        </Typography>
      </Stack>
    </Stack>
  );
};
