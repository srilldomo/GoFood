import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

export default function Login() {
  const [credendtials, setcredendtials] = useState({ 
    email: "",
    password: "", 
  });
  const navigate = useNavigate()
  const HandleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({email:credendtials.email , password:credendtials.password}))
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credendtials.email,
        password: credendtials.password 
      }),
    });
    const json = await response.json();
    console.log(json);
    if(!json.success){
alert("Please Enter a Valid crediendtials")
    }
    if(json.success){
      localStorage.setItem("authtoken", json.authtoken)
      console.log(localStorage.getItem("authtoken"))
  navigate("/")
    }
   
  };
  const onChange = (event) => {
    setcredendtials({
      ...credendtials,
      [event.target.name]: event.target.value,
    });
  };
  return (
    
    <div className='container'>
       <h1 className="m-1">Login</h1>
        <form onSubmit={HandleSubmit}> 
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
          <Link to="/createUser" className="m-3 btn btn-danger">
           I m a new User
          </Link>
        </form>
    </div>
  )
}
