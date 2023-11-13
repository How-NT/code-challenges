import { useCallback } from "react";
import { useExchangeQueryParams } from "./exchange-params";

export const useExchangeNavigation = () => {
  const { queryParams, setQueryParams } = useExchangeQueryParams();

  const goNextStep = useCallback(() => {
    setQueryParams({ step: queryParams.step + 1 }, "replaceIn");
  }, [queryParams.step, setQueryParams]);

  const goPrevStep = useCallback(
    (step?: number) => {
      const prevStep = typeof step === "number" ? step : queryParams.step - 1;
      setQueryParams({ step: prevStep }, "replaceIn");
    },
    [queryParams.step, setQueryParams]
  );

  return {
    goPrevStep,
    goNextStep,
  };
};
