import axios from "axios";
import { useAuth0 } from "@auth0/auth0-vue";

export default function loadConfig() {
  const { getAccessTokenSilently } = useAuth0();

  const instance = axios.create({
    baseURL: "http://localhost:1025/api",
    timeout: 2000,
  });
  instance.interceptors.request.use(
    async (config) => {
      const token = await getAccessTokenSilently();
      config.headers['Authorization'] = `Bearer ${token}`;
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  return instance;
}