import axios from "axios";
const { VITE_HOST, VITE_API_TOKEN } = import.meta.env;
// import { host } from "../api/host";
// import { API_TOKEN } from "../utils/data";

export const login = async (username, password) => {
  const body = {
    username,
    password,
  };
  try {
    const { data } = await axios.post(`${VITE_HOST}${VITE_API_TOKEN}`, body);
    return data;
    // const accessToken = response.data;
    // localStorage.setItem("accessToken", accessToken);
  } catch (error) {
    console.error(error);
  }
};

export const logout = () => {
  localStorage.removeItem("accessToken");
};
