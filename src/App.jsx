import { Routes, Route } from "react-router-dom";
import NavMain from "./components/Nav/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Home";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/ProtectedRoute/PrivateRoute";
import UserLikes from "./pages/UserLikes";
import UserList from "./pages/UserList";
import UserMatchList from "./pages/UserMatchList";
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

        <Route element={<PrivateRoute />}>
          <Route path="/users/edit/:id" element={<FormProfile />} />
          <Route path="/users/profile" element={<Profile />} />
          <Route path="/users" element={<UserList />} />
          {/* <Route path="/users/likes/family" element={<UserLikes />} />
          <Route path="/users/likes/nanny" element={<UserLikes />} /> */}
          <Route path="/users/matchlist" element={<UserMatchList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
