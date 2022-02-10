import { NavLink } from "react-router-dom";
import useAuth from "../../auth/useAuth";
import "../../styles/NavMain.css";

const NavMain = () => {
  const { isLoggedIn, currentUser, removeUser } = useAuth();

  return (
    <nav className="NavMain bg-light">
      {currentUser && currentUser.role[0] === "nanny" && (
        <NavLink to="/users"> Families </NavLink>
      )}
      {currentUser && currentUser.role[0] === "family" && (
        <NavLink to="/users"> Nannies</NavLink>
      )}

      {isLoggedIn && (
        <>
          <NavLink to="/">Home</NavLink>
          <NavLink className="myProfile" to="/users/profile">Profile</NavLink>
          <NavLink to="#" onClick={removeUser}>
            Log-Out
          </NavLink>
          <NavLink to="/users/matchlist">Matches</NavLink>
        </>
      )}
      {!isLoggedIn && (
        <>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </>
      )}
    </nav>
  );
};

export default NavMain;
