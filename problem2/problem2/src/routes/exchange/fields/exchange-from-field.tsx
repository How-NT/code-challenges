import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Avatar,
  Box,
  FormHelperText,
  Popover,
  Stack,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { useListCoinByIds } from "api/coin";
import { useField } from "formik";
import { useState } from "react";
import { FORM_FIELDS } from "../form-field";
import { isExchangeFromField } from "../utils";
import { ExchangeAmountFromField } from "./exhange-amount-from-field";
import { ExchangeAmountToField } from "./exhange-amount-to-field";
import { ListCoinSearch } from "./list-coin-search";
const {
  EXCHANGE_PAIR: { EXCHANGE_FROM_AMOUNT },
} = FORM_FIELDS;

export const ExchangeField: React.FC<TextFieldProps> = ({ name }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [field] = useField(name);
  const [, meta] = useField(EXCHANGE_FROM_AMOUNT.name);
  const { data: listCoinByIds } = useListCoinByIds();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box flex={1}>
      <Stack
        component="button"
        aria-describedby={id}
        onClick={handleClick}
        type="button"
        sx={{
          background: "unset",
          color: "unset",
          width: 1,
          height: 1,
          border: "none",
          cursor: "pointer",
          px: 0,
        }}
        flexDirection="row"
        alignItems="center"
      >
        <Stack sx={{ flex: 1 }}>
          {isExchangeFromField(name) ? (
            <ExchangeAmountFromField />
          ) : (
            <ExchangeAmountToField />
          )}
        </Stack>

        <Stack
          flexDirection="row"
          sx={{
            paddingLeft: 4,
            p: 2,
            cursor: "pointer",
            width: "150px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack flexDirection="row" gap={2} alignItems="center" pr={2}>
            <Avatar
              alt="Coin"
              src={`https://static.simpleswap.io/images/currencies-logo/${
                listCoinByIds?.[field.value]?.symbol
              }.svg`}
              sx={{
                width: "24px",
                height: "24px",
              }}
            />
            <Typography sx={{ textTransform: "uppercase" }} variant="body2">
              {field.value}
            </Typography>
          </Stack>

          <ExpandMoreIcon fontSize="small" />
        </Stack>
      </Stack>
      {isExchangeFromField(name) && (
        <Stack mt="-10px">
          <FormHelperText error>{meta.error}</FormHelperText>
        </Stack>
      )}

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{
          "& .MuiPopover-paper": {
            width: "576px",
            top: "10px !important",
          },
        }}
      >
        <ListCoinSearch name={name} />
      </Popover>
    </Box>
  );
};
