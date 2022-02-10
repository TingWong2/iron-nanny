import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import apiHandler from "../api/apiHandler";
import useAuth from "../auth/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCheck,
  faAngleLeft,
  faAngleRight,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

const UserList = () => {
  const [count, setCount] = useState(0);

  const { currentUser } = useAuth();

  let role = currentUser.role;
  let theirRole = role[0] === "nanny" ? "family" : "nanny";

  const { id } = useParams();

  const [users, setUsers] = useState([]);

  const [matched, setMatched] = useState(false);
  const [liked, setLiked] = useState(false);
  const [back, setBack] = useState(false);
  const [userId, setUserId] = useState("");

  //const [clicked, setClicked]= useState(false);

  useEffect(async () => {
    const apiProfiles = await apiHandler.getAllUsers();
    console.log(apiProfiles);
    const apiProfilesArray = apiProfiles.users;
    const fetchedProfiles = [...apiProfilesArray];
    setUsers(fetchedProfiles);
  }, []);

  useEffect(() => {
    if (!users.length) return;
    apiHandler
      .getLike(users[count]._id)
      .then(({ data }) => {
        if (!data) setLiked(false);
        else setLiked(true);
        console.log('the like state is', liked)
      })
      .catch((error) => setError(error.response.message));
  }, [count, users]);

  const handleLeft = () => {
    setCount((((count - 1) % users.length) + users.length) % users.length);
    setMatched(false);
  };

  const handleRight = () => {
    setCount((count + 1) % users.length);
    setMatched(false);
  };

  // const handleBack = () => {
  //   setMatched(false);
  // };

  const likedId = users[count]?._id;
  const likerId = currentUser._id;
  const payload = { liker: likerId, liked: likedId };

  const handleClick = async (event) => {
    console.log('handleClick is triggered')
    event.preventDefault();
    const apiMatch = await apiHandler.addMatched(likedId, payload);
    console.log(
      "A new like has been added to the Like collection",
      apiMatch.liked
    );

    if (apiMatch.liked === true) setLiked(true);

    const apiLikedId = apiMatch._doc.liked;
    setUserId({ ...apiLikedId });
    /*let isUserLiked;
    if ((liked === true) && (userId === users[count]._id) ) {
      isUserLiked  = true;
    }
    console.log(isUserLiked);*/
    
    if (apiMatch.matched === true) {
      console.log(
        "A new like has been added to the Like collection",
        apiMatch.matched
      );
      setMatched(true);
    }
  };

  return (
    <div className="container">
      {matched === false && (
        <>
          <div className="card">
            <img src={users[count]?.picture} alt={users[count]?.name} />
            <div className="card-body">
              <h5 className="card-title">{users[count]?.name}</h5>
              <p className="card-text">{users[count]?.age}</p>
              <p className="card-text">{users[count]?.address}</p>
              {currentUser.role[0] === "family" && (
                <>
                  <p className="card-text">{users[count]?.resume}</p>
                  <p className="card-text">{users[count]?.availability}</p>
                </>
              )}
              {currentUser.role[0] === "nanny" && (
                <>
                  <p className="card-text">{users[count]?.numberOfKids}</p>
                  <p className="card-text">{users[count]?.kidsAge}</p>
                  <p className="card-text">{users[count]?.description}</p>
                  <p className="card-text">{users[count]?.availability}</p>
                </>
              )}
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <a href="#" onClick={() => handleLeft()}>
              <FontAwesomeIcon icon={faAngleLeft} size="3x" />
            </a>
            {liked === false && (
              <FontAwesomeIcon
                icon={faHeart}
                size="5x"
                color="red"
                onClick={handleClick}
              />
            )}
            {liked && (
              <FontAwesomeIcon
                icon={faCheck}
                size="5x"
                color="green"
                onClick={handleClick}
              />
            )}

            {/* {back === true && (
              <button className="btn btn-primary">Already matched </button>
            )} */}
            
            <button onClick={() => handleRight()}>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
            <a href="#" onClick={() => handleRight()}>
              <FontAwesomeIcon icon={faAngleRight} size="3x" />
            </a>
          </div>
        </>
      )}
      {matched === true && (
        <div>
          <div className="card">
            <h2>
              It is a match !{" "}
              <i className="fas fa-heart" style={{ color: "red" }}></i>
            </h2>
            <p>
              Here you are the contact informations of your mattch, feel free to
              contact her/him
            </p>
            <img
              src={users[count].picture}
              className="card-img-top"
              alt={users[count].name}
            />
            <div className="card-body">
              <h5 className="card-title">{users[count].name} </h5>
              <p className="card-text">
                <i className="fas fa-mobile-alt mr-2"></i>
                {users[count].phone}
              </p>
              <p className="card-text">
                <i className="fas fa-envelope"></i>
                {users[count].address}
              </p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <a href="#" className="text-left" onClick={() => handleLeft()}>
                <FontAwesomeIcon icon={faAngleLeft} size="3x" />
              </a>
              <FontAwesomeIcon
                icon={faCheck}
                size="5x"
                color="green"
                onClick={handleClick}
              />
              <a href="#" onClick={() => handleRight()}>
                <FontAwesomeIcon icon={faAngleRight} size="3x" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
