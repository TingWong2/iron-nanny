import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import apiHandler from "../api/apiHandler";

const matchAPIList = [
  {
    nanny: {
      name: "Marie-Noel France",
      role: "nanny",
      age: 45,
      email: "marienoel.france@gmail.com",
      phone: "0691234567",
      address: "28 rue de vaugirard 75015 Paris",
      picture:
        "https://res.cloudinary.com/dgblvjmrn/image/upload/v1642427165/62_bu6hcb.jpg",
      experience: 10,
      resume:
        " i am graduated from babyschool i enjoy taking care of all children",
      availability: "fullTime",
    },

    nanny: {
      name: "Rosemary Chapman",
      role: "nanny",
      age: 37,
      email: "rosemary.Chapman@gmail.com",
      phone: "0691234567",
      address: "8 rue Tiphaine 75015 Paris",
      picture:
        "https://res.cloudinary.com/dgblvjmrn/image/upload/c_thumb,w_200,g_face/v1642427165/86_evzxio.jpg",
      experience: 25,
      resume:
        "The greatest gift I can give to your children is my time, my love, and my attention.",
      availability: "fullTime",
    },

    /*family: {
      name: "Caroline Smith",
      role: "family",
      age: 35,
      email: "caroline.smith@gmail.com",
      phone: "0712233445",
      address: "90 rue de la convention 75015 Paris",
      picture:
        "https://res.cloudinary.com/dgblvjmrn/image/upload/v1642427161/images-4_rcjqon.jpg",
      numberOfKids: 1,
      kidsAge: [5],
      description:
        "Pierre is full of energy, he likes reading and playing football",
      availability: "afterSchool",
    },*/

  },
];

console.log("matchAPIList>>>>>>>>", matchAPIList[0].nanny)

const UserMatchList = () => {

  const [match, setMatch] = useState([]);

  useEffect(() => {
    const endpoint = "/api/matches/matchList";
    const fetchMatchList = async () => {
      const findMatchList = await apiHandler.findMatchList(endpoint);
      console.log("findMatchList", findMatchList);
      setMatch(findMatchList);
    };
    fetchMatchList();
  }, []);

  return (
  <div>

    {matchAPIList.map((el)=>{
      return (
        <div className="card">
        <p>{el.nanny.name}</p>
        </div>
      )
    })}

  </div>
  )
};

export default UserMatchList;
