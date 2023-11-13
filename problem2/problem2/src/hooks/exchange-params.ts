import {
  NumberParam,
  QueryParamConfig,
  useQueryParams,
  withDefault,
} from "use-query-params";

interface ExchangeParams {
  step: number;
}

export type ExchangeQueryParams = {
  [k in keyof ExchangeParams]: QueryParamConfig<ExchangeParams[k]>;
};

export const useExchangeQueryParams = () => {
  const [queryParams, setQueryParams] = useQueryParams<ExchangeQueryParams>({
    step: withDefault(NumberParam, 1),
  });

  return {
    queryParams,
    setQueryParams,
  };
};
