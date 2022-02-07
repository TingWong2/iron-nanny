import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import axios from "axios";
import apiHandler from "../api/apiHandler";
import useAuth from "../auth/useAuth";



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
console.log(role);
let theirRole = role[0] === "nanny" ? "family" : "nanny";

const [users, setUsers] = useState(initialUser[theirRole])
//const params = useParams();


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


  return (
    <div className="container">   
      <div className="card">        
       <h1>{users[count].name} - {users[count].role}</h1>
      <img src={users[count].picture} alt={users[count].name}/>
     </div>    
    <button onClick={ () => handleLeft() }>Left</button>    
   <button onClick={ () => handleRight() }>Right</button>  
  </div>
  );

}


export default UserList;
