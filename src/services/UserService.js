import axios from "axios";
const { VITE_HOST, VITE_API_TOKEN, VITE_USERS } = import.meta.env;

export const getUser = async (url) => {
  try {
    return url;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (username, password) => {
  try {
    const body = {
      username,
      password,
    };
    const { data } = await axios.post(`${VITE_HOST}${VITE_API_TOKEN}`, body);
    return data;
    // const accessToken = response.data;
    // localStorage.setItem("accessToken", accessToken);
  } catch (error) {
    console.error(error);
  }
};

export const signup = async (
  username,
  email,
  is_staff = false,
  password,
  confirm_password,
) => {
  try {
    const body = {
      username,
      email,
      is_staff,
      password,
      confirm_password,
    };
    const { data } = await axios.post(`${VITE_HOST}${VITE_USERS}`, body);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const logout = () => {
  localStorage.removeItem("accessToken");
};
