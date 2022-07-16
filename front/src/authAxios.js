import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-vue";

const { getAccessTokenSilently } = useAuth0();

const instance = axios.create({
  baseURL: 'localhost:1025',
  timeout: 20000,
});
instance.interceptors.request.use(
  config => {
    const token = getAccessTokenSilently();
    if(token) config.headers['Authorization'] = `Bearer ${token}`;
  }, err => {
    return Promise.reject(err);
  }
);
instance.interceptors.response.use(
  res => { return res; },
  err => { console.log(err); }
);

export default instance;