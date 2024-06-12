import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

export default function Signup() {
  const [credendtials, setcredendtials] = useState({
    name: "",
    email: "",
    password: "",
    geoLocation: "",
  });
  const navigate = useNavigate()

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credendtials.name,
        email: credendtials.email,
        password: credendtials.password,
        location: credendtials.geoLocation,
      }),
    });
    const json = await response.json();
    console.log(json);
    if(!json.sucess){
alert("Please Enter a Valid crediendtials")
    }
    if(json.sucess){
 navigate("/login")
    }

  };
  const onChange = (event) => {
    setcredendtials({
      ...credendtials,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <>
      <div className=" container">
        <h1 className="m-1">Signup</h1>
        <form onSubmit={HandleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={credendtials.name}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={credendtials.email}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              name="geoLocation"
              value={credendtials.geoLocation}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              name="password"
              value={credendtials.password}
              onChange={onChange}
            />
          </div>
          <button type="submit" className=" m-3 btn btn-primary">
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-danger">
            Already a User
          </Link>
        </form>
      </div>
    </>
  );
}
