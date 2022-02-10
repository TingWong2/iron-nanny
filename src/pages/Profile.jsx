import React, { useEffect } from "react";
import useAuth from "../auth/useAuth";
import { useState } from "react";
import apiHandler from "../api/apiHandler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../styles/userMatchList.css";


const Profile = () => {
  const { currentUser, removeUser } = useAuth();
  const navigate = useNavigate()
  console.log("this is the current user from auth", currentUser);


  async function handleDelete() {

    const userID = currentUser._id

    const endpoint = `/api/users/${userID}`
    try {
      const deletedUser = await apiHandler.deleteUser(endpoint)
      console.log('deletedUser', deletedUser)
      alert("votre profil va être supprimé...")
      removeUser()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="container d-flex justify-content-center ml-auto">
      {currentUser.role[0] === "nanny" && (
        <div className="card mb-3">
          <img
            src={currentUser.picture}
            alt="profile.name"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{currentUser.name}</h5>
            <p className="card-text">{currentUser.age}</p>
            <p className="card-text"><i class="fa-solid fa-inbox"></i>{currentUser.address}</p>
            <p className="card-text"><i className="fa-solid fa-square-phone"></i>{currentUser.phone}</p>
            <p className="card-text">
                      <i className="fa-solid fa-envelope"></i>
                      {currentUser.address}
                    </p>
            <p className="card-text">Resume:{currentUser.resume}</p>
            <p className="card-text">Available: {currentUser.availability}</p>
            <FontAwesomeIcon icon={faEdit} />
            <a href={`/users/edit/${currentUser._id}`} target="_top">
              Update my profile
            </a>
            <FontAwesomeIcon icon={faTrash} />
            <button onClick={handleDelete}><FontAwesomeIcon icon={faTrash} /> Delete </button>
          </div>
        </div>
      )}

      {currentUser.role[0] === "family" && (
        <div className="card mb-3">
          <img
            src={currentUser.picture}
            alt="profile.name"
            className="card-img-top"
          />
          <div className="card-body">
            <h1 className="card-title">{currentUser.name}</h1>
            <p className="card-text"><i class="fa-solid fa-inbox"></i> {currentUser.email}</p>
            <p className="card-text"><i className="fa-solid fa-envelope"></i>{currentUser.address}</p>
            <p className="card-text"><i className="fa-solid fa-square-phone"></i>{currentUser.phone}</p>
            <p className="card-text">Number of kids: {currentUser.numberOfKids}</p>
            <p className="card-text">Kids age: {currentUser.kidsAge}</p>
            <p className="card-text">Available: {currentUser.availability}</p>
            <p className="card-text">{currentUser.description}</p>
            <FontAwesomeIcon icon={faEdit} />
            <a href={`/users/edit/${currentUser._id}`}>
              Update my profile
            </a> <br />
            <button onClick={handleDelete}><FontAwesomeIcon icon={faTrash} /> Delete </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
