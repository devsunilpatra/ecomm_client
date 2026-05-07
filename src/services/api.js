import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

/* Attach access token */
api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");

  console.log(accessToken, "accessToken");

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

/* Auto refresh token */
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    // if access token expired
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res = await api.get(`/users/refresh`);

        const newAccessToken = res.data.accessToken;

        localStorage.setItem("accessToken", newAccessToken);
        // store.dispatch(setAccessToken(res.data.accessToken));

        originalRequest.headers.Authorization = `"Bearer ${newAccessToken}`;

        return api(originalRequest);
      } catch (err) {
        console.log("Refresh failed", err);

        // remove invalid token
        localStorage.removeItem("accessToken");

        // optional redirect
        window.location.href = "/login";

        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  },
);

export default api;
