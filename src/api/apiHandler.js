import axios from "axios";

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_URL,
  withCredentials: true,
});

<<<<<<< HEAD
=======
service.interceptors.request.use((config) => {
	const token = localStorage.getItem("authToken");
	config.headers.Authorization = token ?`Bearer ${token}` : "" ;
	return config;
});


>>>>>>> 208520d4ca0b144dcd56f9d8005afef52d19d1f4
//! Error handling to use in the catch
function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response && error.response.data);
    throw error;
  }
  throw error;
}

const apiHandler = {
  // Service is spread to have access to the basics get/post...
  ...service,

  signup(userInfo) {
    return service
      .post("/api/auth/signup", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getUser(id) {
    return service
      .get("/api/users" + id)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  updateUser(userInfo, id) {
    return service
      .patch("/api/users/" + id, userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  isLoggedIn(token) {
    return service
      .get("/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => res.data)
      .catch(errorHandler);
  },

<<<<<<< HEAD
  signin(userInfo) {
    return service
      .post("/api/auth/signin", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },
=======
	signin(userInfo) {
		return service
			.post("/api/auth/signin", userInfo)
			.then((res) => res.data)
			.catch(errorHandler);
	},
	addMatched(id,userInfo) {
		return service
			.post("/api/matches/" + id, userInfo)
			.then((res) => res.data)
			.catch(errorHandler);
	},
	getMatched(id) {
		return service
			.get("/api/matches/" + id)
			.then((res) => res.data)
			.catch(errorHandler);
	},
>>>>>>> 208520d4ca0b144dcd56f9d8005afef52d19d1f4

  getAllUsers(role) {
    return service
      .get("/api/users/" + role)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteUser(endpoint) {
    return service
      .delete(endpoint)
      .then((res) => res.data)
      .catch(errorHandler);
  },
};

export default apiHandler;

// export default {}
