import React from "react";

const Profile = () => {

	const APIProfile = {
		name: "Lynda Dupond",
		role: "babysitter",
		age: 22,
		password: "lyndaDupond",
		email: "lynda.dupond@gmail.com",
		cellphone: "0612233445",
		address: "110 rue de la convention 75015 Paris",
		picture: "https://res.cloudinary.com/dgblvjmrn/image/upload/v1642427168/84_zstpqh.jpg",
		experience: 2,
		resume: "I love children, i used to take care of my brothers and sisters",
		availability: "afterSchool",
		
	}

	return (
		<div className="container d-flex justify-content-center ml-auto">
			<div className="card mb-3">
				<img src="{APIProfile.picture}" alt="profile.name" className="card-img-top" />
				<div className="card-body">
					<h5 className="card-title">{APIProfile.name}</h5>
					<p className="card-text">{Profile.address}</p>
					<p className="card-text"><iclassName="fas fa-mobile-alt mr-2"></iclassName=>{APIProfile.cellphone}</p>
					<p className="card-text">{APIProfile.resume}</p>
					<p className="card-text">Available: {APIProfile.availability}</p>
					<i className="fas fa-edit"></i> <a href="/users/{Profile._id}/update">Update my profile</a>
					<i className="fas fa-trash"></i><a href="/users/{Profile._id}/delete">Delete my profile</a>
				</div>
			</div>
		</div>

		
	)

};

export default Profile;



