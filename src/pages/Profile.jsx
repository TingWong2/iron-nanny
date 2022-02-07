import React, { useEffect } from "react";
import useAuth from "../auth/useAuth"
import { useState } from "react";
import apiHandler from "../api/apiHandler";

const Profile = () => {

	const {currentUser} = useAuth()
	console.log('this is the current user from auth', currentUser)


  return (
    <div className="container d-flex justify-content-center ml-auto">
	{currentUser.role === "nanny" && (  
      <div className="card mb-3">
        <img
          src="{currentUser.picture}"
          alt="profile.name"
          className="card-img-top"
        />
        <div className="card-body">
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
  
  );
};

export default Profile;
