import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import LocalStorage from "./LocalStorage";

const AxiosClient = axios.create({
  headers: {
    "content-type": "application/json",
  },
});

// handle request to convert all api requests to snake_case
AxiosClient.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const token = LocalStorage.getToken();

  const newConfig = { ...config };
  if (token && newConfig.headers) {
    newConfig.headers["Authorization"] = `${token}`;
  }

  if (
    newConfig.headers &&
    newConfig.headers["Content-Type"] === "multipart/form-data"
  )
    return newConfig;

  // convert request to snake_case
  if (config.params) {
    // newConfig.params = decamelizeKeys(config.params);
  }
  if (config.data) {
    // newConfig.data = decamelizeKeys(config.data);
  }

  return newConfig;
});

// handle response to convert all api responses to camelCase
AxiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response && response.data) {
      return response.data;
    }

    console.log("🚀 ~ response:", response);
    return response;
  },
  (error) => {
    // Handle errors
    return error;
  }
);

export default AxiosClient;
