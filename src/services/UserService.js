import axios from "axios";
import { host } from "../api/host";
import { API_TOKEN } from "../utils/data";

export const login = async (username, password) => {
  const body = {
    username,
    password,
  };
  try {
    const response = await axios.post(`${host}${API_TOKEN}`, body);

    return response;
    // const accessToken = response.data;
    // localStorage.setItem("accessToken", accessToken);
  } catch (error) {
    console.error(error);
  }
};

export const logout = () => {
  localStorage.removeItem("accessToken");
};
