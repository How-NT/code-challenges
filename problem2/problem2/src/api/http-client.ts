import axios from "axios";
import { API_BASE_URL, TIMEOUT } from "constants/api";

const httpClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: TIMEOUT,
  headers: {},
});

httpClient.interceptors.request.use((request) => {
  // handle pre-call interceptor
  return request;
});

httpClient.interceptors.response.use((response) => {
  return response;
});

export default httpClient;
