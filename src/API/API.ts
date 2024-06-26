import axios from "axios";

import { TokenManager } from "./tokenManager";

axios.defaults.withCredentials = true;
const baseURL = process.env.REACT_APP_BASE_URL;

export const API = axios.create({
  baseURL: `${baseURL}`,
  withCredentials: true,
  headers: {
    "Content-Type": `application/json`,
    "ngrok-skip-browser-warning": "69420",
  },
});

const reissueToken = async () => {
  await axios({
    method: "patch",
    url: `${baseURL}/auth`,
    withCredentials: true,
  });
};

API.interceptors.request.use((config) => {
  const tokenManager = new TokenManager();
  console.log(config);

  if (
    !tokenManager.validateToken(
      tokenManager.accessToken,
      tokenManager.accessExp
    )
  ) {
    tokenManager.initToken();
    reissueToken();
  }

  config.headers.Authorization = tokenManager.accessToken
    ? `Bearer ${tokenManager.accessToken}`
    : undefined;

  return config;
});
