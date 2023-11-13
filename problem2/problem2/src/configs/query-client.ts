import axios from 'axios';
import {
  DefaultOptions,
  MutationCache,
  QueryCache,
  QueryClient,
} from 'react-query';

interface QueryClientConfig {
  queryCache?: QueryCache;
  mutationCache?: MutationCache;
  defaultOptions?: DefaultOptions;
}

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retryOnMount: false,
      retry(failureCount, error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
          return false;
        } else if (failureCount < 2) {
          return true;
        }
        return false;
      },
    },
  },
};

export const queryClient = new QueryClient(queryClientConfig);
