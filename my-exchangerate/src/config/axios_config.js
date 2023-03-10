import axios from 'axios';
import store from '../store';
import JSONbigint from 'json-bigint';

// axios.defaults.headers.post['Content-Type'] = 'application/json';

const config = {
  // baseURL: `${process.env.VUE_APP_BASE_URL}`,
  timeout: 5000,
  // headers: { withCredentials: true },
  headers: { 'Content-Type': 'Applicatin/x-www-form-urlencoded' }
};

const instance = axios.create(config);

instance.interceptors.request.use(
  function (config) {
    const auth = store.state.user.auth_token;
    if (auth) {
      config.headers.Authorization = `Basic ${auth}`;
    }
    config.transformResponse = [(data) => JSONbigint.parse(data)];
    if (!(config.url.includes('/regist') || config.url.includes('/banners')))
      config.transformRequest = [(data) => JSONbigint.stringify(data)];
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// instance.interceptors.response.use(response => {
//   return response;
// });

export default instance;
