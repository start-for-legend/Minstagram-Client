import axios from "axios";
import { TokenManager } from "./tokenManager";

axios.defaults.withCredentials = true;
const baseURL = process.env.REACT_APP_BASE_URL;

export const API = axios.create({
  baseURL,
  withCredentials: true,
});

const reissueToken = async () => {
  await axios({
    method: "patch",
    url: `${baseURL}/auth`,
    withCredentials: true,
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
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

  config.headers["Authorization"] = tokenManager.accessToken
    ? `Bearer ${tokenManager.accessToken}`
    : undefined;

  return config;
});
