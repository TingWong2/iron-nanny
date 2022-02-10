import { NavLink } from "react-router-dom";
import useAuth from "../../auth/useAuth";
import "../../styles/NavMain.css";

const NavMain = () => {
  const { isLoggedIn, currentUser, removeUser } = useAuth();
  console.log(currentUser);
  return (
    <nav className="NavMain navbar">
      <NavLink className="myProfile" to="/profile">
        Profile
      </NavLink>
      {currentUser && currentUser.role[0] === "nanny" && (
        <NavLink to="/users/family"> Users</NavLink>
      )}
      {currentUser && currentUser.role[0] === "family" && (
        <NavLink to="/users/nanny"> Users</NavLink>
      )}

      {isLoggedIn && (
        <>
          <NavLink to="/users/profile"></NavLink>
          <button onClick={removeUser}>Log-Out</button>
          Your role is: {currentUser && currentUser.role}
          {currentUser && currentUser.role[0] === "nanny" && (
            <NavLink to="/users/matchlist/family">Matches</NavLink>
          )}
          {currentUser && currentUser.role[0] === "family" && (
            <NavLink to="/users/matchlist/nanny">Matches</NavLink>
          )}
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
