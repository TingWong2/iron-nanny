import React, {useState, useEffect} from "react";
import {Navigate, useParams} from 'react-router-dom';
import axios from "axios";
import apiHandler from "../api/apiHandler";
import useAuth from "../auth/useAuth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'



const UserList = () => {


const [count, setCount] = useState(0);

const initialUser = {
  nanny: [
    {    
      picture: "https://res.cloudinary.com/dgblvjmrn/image/upload/v1642427161/images-4_rcjqon.jpg",
      name: "Caroline Smith",
      role: "family",
      password:"",
      email: ""
    }
  ] ,
  family: [
    {    
      picture: "https://res.cloudinary.com/dgblvjmrn/image/upload/v1642427168/84_zstpqh.jpg",
      name: "Lynda Dupond",
      role: "nanny",
      password: "lyndaDupond",
      email: "lynda.dupond@gmail.com"
    }   
  ]
}

const {currentUser} = useAuth();

let role = currentUser.role;
let theirRole = role[0] === "nanny" ? "family" : "nanny";

const {id} = useParams();

const [users, setUsers] = useState(initialUser[theirRole])


useEffect(async () =>  {
  const apiProfiles = await apiHandler.getAllUsers(theirRole);
  const fetchedProfiles = [...apiProfiles];
  setUsers(fetchedProfiles);
}
, []);

    const handleLeft = () => {      
      setCount(((count - 1) % users.length + users.length) % users.length); 
    };

    const handleRight = () => {
      setCount((count + 1) % users.length);
    };


    const likedId = users[count]._id;
    const likerId = currentUser._id;
    const payload = {liker: likerId, liked: likedId};

    const handleClick = async (event) => {
      event.preventDefault();
      const matches = await apiHandler.addMatched(likedId, payload);
      console.log(matches);
      if (matches === null) {
        users.push(matches.likedId);
       Navigate('/users/' + likedId.role[0]);
      }
      } 
    


  return (
    <div className="container">   
      <div className="card">        
       <h1>{users[count].name} - {users[count].role}</h1>
       <span style={{fontSize:"0.7em"}}>liked id :{likedId}</span>
       <span style={{fontSize:"0.7em"}}>liker id :{likerId}</span>
      <img src={users[count].picture} alt={users[count].name}/>
     </div>   
     <div className = "container text-center">
      <button onClick={ () => handleLeft() }><FontAwesomeIcon icon={faArrowLeft}/></button> 
      <FontAwesomeIcon icon={faHeart} size="5x" color="red"  onClick={handleClick}/>
       <button onClick={ () => handleRight() }><FontAwesomeIcon icon={faArrowRight}/></button>  

   </div> 
  </div>
  );

}


export default UserList;
