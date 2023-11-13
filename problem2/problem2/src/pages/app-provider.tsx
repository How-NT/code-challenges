import { ThemeProvider } from "@mui/material";
import "api/http-client";
import { queryClient } from "configs/query-client";
import { FunctionComponent } from "react";
import { QueryClientProvider } from "react-query";
import { theme } from "theme";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter as RouteAdapter } from "use-query-params/adapters/react-router-6";

const AppProviders: FunctionComponent<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    // Adapt for react-router v6
    <ThemeProvider theme={theme}>
      <QueryParamProvider adapter={RouteAdapter}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </QueryParamProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
