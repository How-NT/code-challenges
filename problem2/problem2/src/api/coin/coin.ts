import httpClient from "api/http-client";
import { apiPaths } from "configs/api-paths";
import keyBy from "lodash/keyBy";
import { useQuery, UseQueryOptions } from "react-query";

export interface CoinIem {
  id?: number;
  symbol: string;
  symbolFront?: string;
  name?: string;
  description?: string;
  network?: string;
  cmcTicker?: string;
  tickerSeo?: string;
  networkSeo?: string;
  isMainnetSeo?: boolean;
  mainUrl?: string;
  addressExplorer: string;
  confirmationsFrom?: number;
  enabled?: boolean;
  extraId?: string;
  hasExtraId?: boolean;
  howToExchangePageUrl?: string;
  isFiat: boolean;
  pricePredictionPageUrl?: string;
  priority?: boolean;
  priorityFrom?: number;
  priorityTo?: number;
  supportsFiatExchange?: string;
  txExplorer?: string;
  validationAddress?: string;
  validationExtra?: string;
  video: string;
  warningsFrom?: string[];
  warningsTo?: string[];
  createdAt: string;
}

export interface ExchangeInput {
  currencyFrom: string;
  currencyTo: string;
  amount: number;
  fixed: boolean;
  site: boolean;
}

export const useListCoin = <T = CoinIem[]>(
  option?: UseQueryOptions<CoinIem[], unknown, T>
) => {
  return useQuery(
    apiPaths.listCoins(),
    () => httpClient.get(apiPaths.listCoins()).then((res) => res.data),
    {
      staleTime: Infinity,
      ...option,
    }
  );
};

export const useListCoinByIds = (
  option?: UseQueryOptions<CoinIem[], unknown, Record<string, CoinIem>>
) => {
  return useListCoin({
    ...option,
    select: (data) => keyBy(data, "symbol"),
  });
};

export const useExchangeCurrency = (
  params: ExchangeInput,
  option?: UseQueryOptions<number, unknown, unknown>
) => {
  return useQuery(
    [
      apiPaths.exchangeCurrency(),
      params.currencyFrom,
      params.currencyTo,
      params.amount,
      params.fixed,
      params.site,
    ],
    () =>
      httpClient
        .get(apiPaths.exchangeCurrency(), {
          params: {
            currencyFrom: params.currencyFrom,
            currencyTo: params.currencyTo,
            amount: params.amount,
            fixed: params.fixed,
            site: true,
          },
        })
        .then((res) => res.data),
    {
      ...option,
    }
  );
};
