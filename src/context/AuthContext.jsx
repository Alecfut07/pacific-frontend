import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { jwtDecode } from "jwt-decode";
import { getUser } from "../services/UserService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isStaff, setIsStaff] = useState(false);

  const getUserStaff = async (user_id) => {
    return await getUser(user_id);
  };

  const login = async (token) => {
    localStorage.setItem("accessToken", token);
    const decodedToken = jwtDecode(token);
    const is_staff = await getUserStaff(decodedToken.user_id);
    setIsStaff(is_staff);
    setUser(decodedToken);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    setUser(null);
  };

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (token) {
          const decodedToken = jwtDecode(token);
          const is_staff = await getUserStaff(decodedToken.user_id);
          setIsStaff(is_staff);
          setUser(decodedToken);
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, isStaff, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
