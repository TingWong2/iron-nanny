import { NavLink } from "react-router-dom";
import useAuth from "../../auth/useAuth";
import "../../styles/NavMain.css";

const NavMain = () => {
  const { isLoggedIn, currentUser, removeUser } = useAuth();

  return (
    <nav className="NavMain navbar">
      <NavLink className="myProfile" to="/users/profile">
        Profile
      </NavLink>
      {currentUser && currentUser.role[0] === "nanny" && (
        <NavLink to="/users"> Users</NavLink>
      )}
      {currentUser && currentUser.role[0] === "family" && (
        <NavLink to="/users"> Users</NavLink>
      )}

      {isLoggedIn && (
        <>
          <NavLink to="/users/profile"></NavLink>
          <button onClick={removeUser}>Log-Out</button>
          Your role is: {currentUser && currentUser.role}
        </>
      )}
      {!isLoggedIn && (
        <>
          <NavLink to="/">Sign In</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </>
      )}
    </nav>
  );
};

export default NavMain;
