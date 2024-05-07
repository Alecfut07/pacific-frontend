import axios from "axios";

export const login = async (username, password) => {
  const body = {
    username,
    password,
  };
  try {
    const { data } = await axios.post(
      "http://ciberserenosmx.com:996/api/token/",
      body,
    );

    const accessToken = data.access;
    localStorage.setItem("accessToken", accessToken);
  } catch (error) {
    console.error(error);
  }
};

export const logout = () => {
  localStorage.removeItem("accessToken");
};
