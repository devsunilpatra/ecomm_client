import axios from "axios";
import { setAccessToken } from "../features/auth/authSlice";

let store;

export const injectStore = (_store) => {
  store = _store;
};

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve(token);
    }
  });

  failedQueue = [];
};


api.interceptors.request.use((config)=>{
  const token = store.getState()?.auth?.accessToken;

  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }

  return config;
})

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        // wait until refresh finishes
        return new Promise((resolve, reject) => {
          failedQueue.push({
            resolve,
            reject,
          });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;

            return api(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const res = await api.get("/users/refresh");

        const accessToken = res.data.accessToken;

        store.dispatch(setAccessToken(accessToken));

        // localStorage.setItem(
        //   "accessToken",
        //   accessToken
        // );

        processQueue(null, accessToken);

        originalRequest.headers.Authorization = `Bearer ${accessToken}`;

        return api(originalRequest);
      } catch (err) {
        processQueue(err, null);

        // store.dispatch(logout());

        window.location.href = "/login";

        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);

export default api;
