import api from "../../services/api";

export const loginUserApi = async (formData) => {
  const res = await api.post("/users/login", formData);

  return res.data;
};

export const registerUserApi = async (formData) => {
  const res = await api.post("/users/register", formData);

  return res.data;
};

// export const logoutApi = () => api.post("/users/logout");
