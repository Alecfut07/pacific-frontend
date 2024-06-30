import axios from "axios";
import https from "https";
const { VITE_HOST, VITE_API_TOKEN, VITE_USERS } = import.meta.env;

const axiosInstance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

export const getUser = async (user_id) => {
  try {
    const { data } = await axiosInstance.get(
      `${VITE_HOST}${VITE_USERS}${user_id}/`,
    );
    return data.is_staff;
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
    const { data } = await axiosInstance.post(
      `${VITE_HOST}${VITE_API_TOKEN}`,
      body,
    );
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
  is_staff,
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
    const { data } = await axiosInstance.post(
      `${VITE_HOST}${VITE_USERS}`,
      body,
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const logout = () => {
  localStorage.removeItem("accessToken");
};
