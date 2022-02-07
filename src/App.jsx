import { Routes, Route } from "react-router-dom";
import NavMain from "./components/Nav/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/ProtectedRoute/PrivateRoute";
import UserLikes from "./pages/UserLikes";
import UserList from "./pages/UserList";
import UserMatchList from "./pages/UserMatchList";
import UserProfile from "./pages/UserProfile";
import UserMatch from "./pages/UserMatch";
import FormProfile from "./components/Forms/FormProfile";
import List from "./pages/List";

function App() {
  return (
    <div className="App">
      <NavMain />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/family" element={<List />} />
        <Route path="/nanny" element={<List />} />

        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/profile/edit/" element={<FormProfile />} />
          <Route path="/users/family" element={<UserList />} />
          <Route path="/users/nanny" element={<UserList />} />
          <Route path="/users/likes/family" element={<UserLikes />} />
          <Route path="/users/likes/nanny" element={<UserLikes />} />
          <Route path="/users/match/family" element={<UserMatch />} />
          <Route path="/users/match/nanny" element={<UserMatch />} />
          <Route path="/users/matchlist/family" element={<UserMatchList />} />
          <Route path="/users/matchlist/nanny" element={<UserMatchList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
