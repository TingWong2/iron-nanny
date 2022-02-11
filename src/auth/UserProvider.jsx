import { useState, useEffect } from "react";
import UserContext from "./UserContext";
import apiHandler from "../api/apiHandler";

const UserProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    currentUser: null,
    isLoading: true,
    isLoggedIn: false,
  });

  useEffect(() => {
    authenticateUser();
  }, []);

  const authenticateUser = (callback) => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      apiHandler
        .isLoggedIn(storedToken)
        .then((user) => {
          setAuth({ currentUser: user, isLoading: false, isLoggedIn: true });
          if (callback) {
            callback();
          }
        })
        .catch((e) => {
          setAuth({ currentUser: null, isLoading: false, isLoggedIn: false });
        });
    } else {
      setAuth({ currentUser: null, isLoading: false, isLoggedIn: false });
    }
  };

  const removeUser = () => {
    removeToken();
    authenticateUser();
  };

  const removeToken = () => {
    localStorage.removeItem("authToken");
  };
  const storeToken = (token, callback) => {
    localStorage.setItem("authToken", token);
    authenticateUser(callback);
  };

  const authValues = {
    currentUser: auth.currentUser,
    isLoading: auth.isLoading,
    isLoggedIn: auth.isLoggedIn,
    removeUser,
    storeToken,
    authenticateUser,
  };

  return (
    <UserContext.Provider value={authValues}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
