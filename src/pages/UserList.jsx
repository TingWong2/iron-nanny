import React, {useState} from "react";


const UserList = () => {


  const APIProfiles = [
    {
      name:"Lynda",
      picture: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name:"Lynda1",
      picture: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name:"Lynda2",
      picture: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      name:"toto",
      picture: "https://randomuser.me/api/portraits/men/1.jpg"
    }];

const [count, setCount] = useState(0);


    const handleLeft = () => {
      setCount(((count - 1) % APIProfiles.length + APIProfiles.length) % APIProfiles.length); 
    };

    const handleRight = () => {
      setCount((count + 1) % APIProfiles.length);
    };


  return (
    <div className="container d-flex flex-wrap justify-content-between">   
      <div className="card">        
        <h1>{APIProfiles[count].name}</h1>
      <img src={APIProfiles[count].picture} alt={APIProfiles[count].name}/>
     </div>    
    <button onClick={ () => handleLeft() }>Left</button>    
    <button onClick={ () => handleRight() }>Right</button>   
  </div>
  );

}


export default UserList;
