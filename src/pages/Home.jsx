import React from "react";
import homeCss from "../styles/home.css";

const Home = () => {
	return (
		<>
			<div className="container-fluid">
				<div className="jumbotron jumbotron-fluid">
					<div className="container text-center">
						<h1 className="display-4">Welcome to Super Nounou!</h1>
					</div>
				</div>
			</div>

		
			<div className="mb-3" id="homeSignIn">
				<label forHTML="formGroupExampleInput" class="form-label"> </label>
				<input type="text" class="form-control" id="formGroupExampleInput" placeholder="Your email"/>
			</div>
			<div className="mb-3" id="homeSignIn">
				<label forHTML="formGroupExampleInput2" class="form-label"> </label>
				<input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Your password"/>
			</div>
			<div className="btnHome">
				<button type="submit" className="btn btn-primary">Submit</button>
			</div>
		</>
	);
};

export default Home;
