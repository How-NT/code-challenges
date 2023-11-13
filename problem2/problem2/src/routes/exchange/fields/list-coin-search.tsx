import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { CoinIem, useListCoin } from "api/coin";
import { PageLoading } from "components/loading";
import { useFormikContext } from "formik";
import { useMemo, useState } from "react";
import { ExchangeFormValues } from "../exchangeValidationSchema";
import { FORM_FIELDS } from "../form-field";
import { isExchangeFromField, isExchangeToField } from "../utils";
import { CoinListItem } from "./coin-item";

const {
  EXCHANGE_PAIR: { EXCHANGE_FROM, EXCHANGE_TO },
} = FORM_FIELDS;
interface Props {
  name: string;
}

export const ListCoinSearch: React.FC<Props> = ({ name }) => {
  const { data, isLoading } = useListCoin();
  const [searchValue, setSearchValue] = useState("");
  const { setFieldValue, values } = useFormikContext<ExchangeFormValues>();
  const popularCoins = useMemo(() => {
    const filterData = data?.filter(
      (item) =>
        item.priority &&
        item.name
          ?.toLowerCase()
          .includes(searchValue?.toLocaleLowerCase() || "")
    );

    if (isExchangeFromField(name)) {
      return filterData.filter(
        (item) => item.symbol !== values?.[EXCHANGE_TO.name]
      );
    }

    return filterData.filter(
      (item) => item.symbol !== values?.[EXCHANGE_FROM.name]
    );
  }, [data, searchValue, name, values]);

  const allCoins = useMemo(() => {
    const filterData = data?.filter(
      (item) =>
        !item.priority &&
        item.name
          ?.toLowerCase()
          .includes(searchValue?.toLocaleLowerCase() || "")
    );
    if (isExchangeFromField(name)) {
      return filterData.filter(
        (item) => item.symbol !== values?.[EXCHANGE_TO.name]
      );
    }

    return filterData.filter(
      (item) => item.symbol !== values?.[EXCHANGE_FROM.name]
    );
  }, [data, searchValue, name, values]);

  const handleSelectCoin = (coin: CoinIem) => {
    if (isExchangeFromField(name)) {
      setFieldValue(EXCHANGE_FROM.name, coin.symbol);
      return;
    }

    if (isExchangeToField(name)) {
      setFieldValue(EXCHANGE_TO.name, coin.symbol);
    }
  };

  if (isLoading) {
    return <PageLoading />;
  }

  return (
    <>
      <Stack direction="column" gap={2} pt={2}>
        <Stack px={2}>
          <TextField
            id="input-with-icon-textfield"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            placeholder="Type a currency"
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </Stack>
        <Stack direction="column" gap={1}>
          <Typography variant="caption" color="grey.500" px={2} py={1}>
            Popular Currencies
          </Typography>
          {!popularCoins?.length && (
            <Stack
              py={1}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="caption">No result</Typography>
            </Stack>
          )}
          {popularCoins?.length > 0 &&
            popularCoins?.map((item) => (
              <CoinListItem
                key={item.symbol}
                item={item}
                isSelected={
                  isExchangeFromField(name)
                    ? values[EXCHANGE_FROM.name] === item.symbol
                    : isExchangeToField(name)
                    ? values[EXCHANGE_TO.name] === item.symbol
                    : false
                }
                handleOnSelect={() => handleSelectCoin(item)}
              />
            ))}
        </Stack>

        <Stack direction="column" gap={1}>
          <Typography variant="caption" color="grey.500" px={2} py={1}>
            All Currencies
          </Typography>
          {!allCoins?.length && (
            <Stack
              py={1}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="caption">No result</Typography>
            </Stack>
          )}
          {allCoins?.length > 0 &&
            allCoins?.map((item) => (
              <CoinListItem
                key={item.symbol}
                item={item}
                isSelected={
                  isExchangeFromField(name)
                    ? values[EXCHANGE_FROM.name] === item.symbol
                    : isExchangeToField(name)
                    ? values[EXCHANGE_TO.name] === item.symbol
                    : false
                }
                handleOnSelect={() => handleSelectCoin(item)}
              />
            ))}
        </Stack>
      </Stack>
    </>
  );
};
