import { NavLink } from "react-router-dom";
import useAuth from "../../auth/useAuth";
import "../../styles/NavMain.css";

const NavMain = () => {
  const { isLoggedIn, currentUser, removeUser } = useAuth();
  console.log(currentUser);
  return (
    <nav className="NavMain navbar">
      <NavLink className="logo" to="/">
        App name
      </NavLink>
      {currentUser && currentUser.role[0] === "nanny" && (
        <NavLink to="/users/family"> Users</NavLink>
      )}
      {currentUser && currentUser.role[0] === "family" && (
        <NavLink to="/users/nanny"> Users</NavLink>
      )}

      {isLoggedIn && (
        <>
          <NavLink to="/profile"></NavLink>
          <button onClick={removeUser}>Log-Out</button>
          Your role is: {currentUser && currentUser.role}
        </>
      )}
      {!isLoggedIn && (
        <>
          <NavLink to="/signin">Log in</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </>
      )}
    </nav>
  );
};

export default NavMain;
