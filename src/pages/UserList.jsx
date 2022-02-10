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

  const initialUser = {
    nanny: [
      {
        picture:
          "https://res.cloudinary.com/dgblvjmrn/image/upload/v1642427161/images-4_rcjqon.jpg",
        name: "Caroline Smith",
        role: "family",
        password: "",
        email: "",
      },
    ],
    family: [
      {
        picture:
          "https://res.cloudinary.com/dgblvjmrn/image/upload/v1642427168/84_zstpqh.jpg",
        name: "Lynda Dupond",
        role: "nanny",
        password: "lyndaDupond",
        email: "lynda.dupond@gmail.com",
      },
    ],
  };

  const { currentUser } = useAuth();

  let role = currentUser.role;
  let theirRole = role[0] === "nanny" ? "family" : "nanny";

  const { id } = useParams();

  const [users, setUsers] = useState(initialUser[theirRole]);

  const [matched, setMatched] = useState(false);
  const [liked, setLiked] = useState(false);
  const [back, setBack] = useState(false);
  const [userId, setUserId] = useState("");

  //const [clicked, setClicked]= useState(false);

  useEffect(async () => {
    const apiProfiles = await apiHandler.getAllUsers(theirRole);
    const fetchedProfiles = [...apiProfiles];
    setUsers(fetchedProfiles);

    /*try {
    const apiMatch = await apiHandler.getMatched(likedId);    //get on my new matches collection 
      console.log(apiMatch);
     
     } catch(error) {
       console.error(error);
     }*/
  }, []);

  const handleLeft = () => {
    setCount((((count - 1) % users.length) + users.length) % users.length);
    setLiked(false);
    setMatched(false);
  };

  const handleRight = () => {
    setCount((count + 1) % users.length);
    setLiked(false);
    setMatched(false);
  };

  const handleBack = () => {
    setMatched(false);
  };

  const likedId = users[count]._id;
  const likerId = currentUser._id;
  const payload = { liker: likerId, liked: likedId };

  const handleClick = async (event) => {
    event.preventDefault();
    const apiMatch = await apiHandler.addMatched(likedId, payload);
    console.log(
      "A new like has been added to the Like collection",
      apiMatch.liked
    );
    console.log(liked);

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
            <h1>
              {users[count].name} - {users[count].role}
            </h1>
            <span style={{ fontSize: "0.7em" }}>liked id :{likedId}</span>
            <span style={{ fontSize: "0.7em" }}>liker id :{likerId}</span>
            <img src={users[count].picture} alt={users[count].name} />
          </div>
          <div className="container text-center">
            <button onClick={() => handleLeft()}>
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            {liked === false && (
              <FontAwesomeIcon
                icon={faHeart}
                size="5x"
                color="red"
                onClick={handleClick}
              />
            )}
            {liked === true && (
              <FontAwesomeIcon
                icon={faCheck}
                size="5x"
                color="green"
                onClick={handleClick}
              />
            )}
            {back === true && (
              <button className="btn btn-primary">Already matched </button>
            )}
            <button onClick={() => handleRight()}>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </>
      )}
      {matched === true && (
        <>
          <p>{users[count].name}</p>
          <p>{currentUser.name}</p>
          <div className="container text-center">
            <button onClick={() => handleLeft()}>
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <FontAwesomeIcon
              icon={faAddressCard}
              size="2x"
              onClick={handleBack}
            />
            <button onClick={() => handleRight()}>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default UserList;
