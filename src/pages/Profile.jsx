import React, { useEffect } from "react";
import useAuth from "../auth/useAuth"
import { useState } from "react";
import apiHandler from "../api/apiHandler";

const Profile = () => {
<<<<<<< HEAD

	const {currentUser} = useAuth()
	console.log('this is the current user from auth', currentUser)


  return (
    <div className="container d-flex justify-content-center ml-auto">
	{currentUser.role === "nanny" && (  
      <div className="card mb-3">
        <img
          src="{currentUser.picture}"
=======
  const APIProfile = {
    name: "Lynda Dupond",
    role: "babysitter",
    age: 22,
    password: "lyndaDupond",
    email: "lynda.dupond@gmail.com",
    cellphone: "0612233445",
    address: "110 rue de la convention 75015 Paris",
    picture:
      "https://res.cloudinary.com/dgblvjmrn/image/upload/v1642427168/84_zstpqh.jpg",
    experience: 2,
    resume: "I love children, i used to take care of my brothers and sisters",
    availability: "afterSchool",
  };

  return (
    <div className="container d-flex justify-content-center ml-auto">
      <div className="card mb-3">
        <img
          src="{APIProfile.picture}"
>>>>>>> eb153c4e073aad443c2ffe27b71c5fc8b9ffd906
          alt="profile.name"
          className="card-img-top"
        />
        <div className="card-body">
<<<<<<< HEAD
          <h5 className="card-title">{currentUser.name}</h5>
		  <p className="card-text">{currentUser.age}</p>
          <p className="card-text">{currentUser.address}</p>
          <p className="card-text">{currentUser.cellphone}</p>
          <p className="card-text">{currentUser.resume}</p>
          <p className="card-text">Available: {currentUser.availability}</p>
          <button>Update my profile</button>
          <button>Delete my profile</button>
		   
        </div>
      </div>
	)}
	
	{currentUser.role === "family" && (
		<div className="card mb-3">
        <img
          src="{currentUser.picture}"
          alt="profile.name"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{currentUser.name}</h5>
          <p className="card-text">{currentUser.address}</p>
          <p className="card-text">{currentUser.cellphone}</p>
          <p className="card-text">{currentUser.numberOfKids}</p>
		  <p className="card-text">{currentUser.kidsAge}</p>
          <p className="card-text">Available: {currentUser.availability}</p>
		  <p className="card-text">{currentUser.description}</p>
          <button>Update my profile</button>
          <button>Delete my profile</button>
		   
        </div>
      </div>

	)}

	</div>
  
=======
          <h5 className="card-title">{APIProfile.name}</h5>
          <p className="card-text">{Profile.address}</p>
          <p className="card-text">{APIProfile.cellphone}</p>
          <p className="card-text">{APIProfile.resume}</p>
          <p className="card-text">Available: {APIProfile.availability}</p>
          <i className="fas fa-edit"></i>{" "}
          <a href="/users/{Profile._id}/update">Update my profile</a>
          <i className="fas fa-trash"></i>
          <a href="/users/{Profile._id}/delete">Delete my profile</a>
        </div>
      </div>
    </div>
>>>>>>> eb153c4e073aad443c2ffe27b71c5fc8b9ffd906
  );
};

export default Profile;
