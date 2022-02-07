import useForm from "../../hooks/useForm";
import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import apiHandler from "../../api/apiHandler";

const FormSignUp = () => {
  const [values, setValues] = useState({
    name: "",
    age: 0,
    email: "",
    password: "",
    address: "",
    phone: "",
    experience: "",
    resume: "",
    description: "",
    availability: "",
    kidsNumber: 0,
    kidsAge: 0,
  });

  const [role, setRole] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const pictureRef = useRef("");

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const newUser = { ...values, role };
    const {
      name,
      age,
      email,
      password,
      address,
      phone,
      experience,
      resume,
      description,
      availability,
      kidsNumber,
      kidsAge,
    } = values;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("age", age);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("address", address);
    formData.append("phone", phone);
    formData.append("experience", experience);
    formData.append("resume", resume);
    formData.append("description", description);
    formData.append("availability", availability);
    formData.append("kidsNumber", kidsNumber);
    formData.append("kidsAge", kidsAge);

    formData.append("role", role);
    formData.append("picture", pictureRef.current.files[0]);
    console.log(formData, ">>>>> SIGNUP DATA FROM FRONT");

    apiHandler
      .signup(formData)
      .then(() => {
        navigate("/signin");
      })
      .catch((error) => {
        setError(error.response.message);
      });
  };

  return (
    <>
      <div className="container">
        {error && <h3 className="error">{error.message}</h3>}

        <form className="d-flex flex-column mb-3" onSubmit={handleSubmit}>
          <h2>Signup</h2>

          {/* NAME */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className="form-control form-control-lg"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              value={values.name}
              type="text"
              id="name"
              name="name"
            />
          </div>

          {/* AGE */}
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              className="form-control form-control-lg"
              onChange={(e) => setValues({ ...values, age: e.target.value })}
              value={values.age}
              type="number"
              id="age"
              name="age"
            />
          </div>

          {/* EMAIL */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className="form-control form-control-lg"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              value={values.email}
              type="email"
              id="email"
              name="email"
            />
          </div>

          {/* PASSWORD */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className="form-control form-control-lg"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              value={values.password}
              type="password"
              id="password"
              name="password"
            />
          </div>

          {/* ADDRESS */}
          <div className="form-group">
            <label htmlFor="address">address</label>
            <input
              className="form-control form-control-lg"
              onChange={(e) =>
                setValues({ ...values, address: e.target.value })
              }
              value={values.address}
              type="text"
              id="address"
              name="address"
            />
          </div>

          {/* PHONE */}
          <div className="form-group">
            <label htmlFor="phone">Phone number</label>
            <input
              className="form-control form-control-lg"
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
              value={values.phone}
              type="text"
              id="phone"
              name="phone"
            />
          </div>

          {/* PICTURE */}
          <div className="form-group">
            <label htmlFor="picture">Picture</label>
            <input
              className="form-control form-control-lg"
              ref={pictureRef}
              type="file"
              id="picture"
              name="picture"
            />
          </div>

          {/* ROLE */}
          <div className="form-group mt-4">
            <div className="form-control form-control-lg">
              <div className="form-row">
                <p className="col-2">Who are you?</p>
                <div className="form-check-inline col-2 align-items-baseline">
                  <input
                    type="radio"
                    id="nanny"
                    name="role"
                    value="nanny"
                    className="form-check-input"
                    onChange={handleRoleChange}
                  />
                  <label htmlFor="nanny">Nanny</label>
                </div>
                <div className="form-check-inline col-2 align-items-baseline">
                  <input
                    type="radio"
                    id="family"
                    name="role"
                    value="family"
                    className="form-check-input"
                    onChange={handleRoleChange}
                  />
                  <label htmlFor="family">family</label>
                </div>
              </div>
            </div>
          </div>

          {/* //CONDITIONAL RENDERING ROLE NANNY */}
          {role === "nanny" && (
            <>
              <div className="form-group">
                <label htmlFor="experience">Experience</label>
                <input
                  className="form-control form-control-lg"
                  onChange={(e) =>
                    setValues({ ...values, experience: e.target.value })
                  }
                  value={values.experience}
                  type="text"
                  id="experience"
                  name="experience"
                />
              </div>

              <div className="form-group">
                <label htmlFor="resume">Resume</label>
                <input
                  className="form-control form-control-lg"
                  onChange={(e) =>
                    setValues({ ...values, resume: e.target.value })
                  }
                  value={values.resume}
                  type="text"
                  id="resume"
                  name="resume"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  className="form-control form-control-lg"
                  onChange={(e) =>
                    setValues({ ...values, description: e.target.value })
                  }
                  value={values.description}
                  type="text"
                  id="description"
                  name="description"
                />
              </div>

              <div className="form-group col">
                <label htmlFor="availability">Availability</label>
                <select
                  name="availability"
                  id="availability"
                  className="form-control"
                  onChange={(e) =>
                    setValues({ ...values, availability: e.target.value })
                  }
                >
                  <option value="fullTime">Full Time</option>
                  <option value="partTime">Part Time</option>
                  <option value="evening">Evening</option>
                  <option value="afterSchool">After School</option>
                </select>
              </div>
            </>
          )}

          {/* //CONDITIONAL RENDERING ROLE NANNY */}
          {role === "family" && (
            <>
              <div className="form-group">
                <label htmlFor="kidsNumber">Number of kids</label>
                <input
                  className="form-control form-control-lg"
                  onChange={(e) =>
                    setValues({ ...values, kidsNumber: e.target.value })
                  }
                  value={values.kidsNumber}
                  type="number"
                  min="1"
                  max="5"
                  id="kidsNumber"
                  name="kidsNumber"
                />
              </div>
              <div className="form-group">
                <label htmlFor="kidsAge">Kids age</label>
                <input
                  className="form-control form-control-lg"
                  onChange={(e) =>
                    setValues({ ...values, kidsAge: e.target.value })
                  }
                  value={values.kidsAge}
                  type="number"
                  id="kidsAge"
                  name="kidsAge"
                />
              </div>
            </>
          )}

          <button className="btn btn-lg btn-primary align-self-center">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default FormSignUp;
