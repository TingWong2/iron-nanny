import React from "react";
import useAuth from "../../auth/useAuth";
import { useNavigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const navigate = useNavigate();
  const { isLoggedIn, isLoading } = useAuth();
  console.log("isLoggedin", isLoggedIn);
  if (isLoading) return <p>Loading...</p>;
  if (!isLoggedIn) {
    navigate("/");
    return <div>Not logged in</div>;
  } else return <Outlet />;
};

export default PrivateRoute;
