
import {   FaUnlock, FaPen, FaRegEnvelope } from "react-icons/fa";

import './Register.css'
import { Link } from "react-router-dom";

import { AuthContext,  } from "../../../Provider/AuthProvider";
import { useContext } from "react";
import Navber from "../../Navber/Navber";

const Register = () => {
const {createUser} = useContext(AuthContext)


  const  handleRegister = e =>{
    console.log("hello");
   e.preventDefault();
   const email = e.target.email.value;
   const password = e.target.password.value;
  
   const name = e.target.name.value;
   console.log(email, password , name);
  //  create user on register
  createUser(email, password)
  .then(result => {
    console.log(result.user);
  })
  .catch(error =>{
    console.error(error);
  })
  }
    return (
      <div>
        <Navber></Navber>

        <div className="body">
          <section>
            <div className="login-box">
              <form onSubmit={handleRegister}>
                <h2>Register</h2>
                <div className="input-box">
                  <span className="icon">
                    <FaUnlock></FaUnlock>
                  </span>
                  
                  <input type="text" name="name" required id="" />
                  <label>Name</label>
                </div>
                <div className="input-box">
                  <span className="icon">
                   <FaPen></FaPen>
                  </span>
                  <input type="text" name="photo" required id="" />
                  <label>Photo URL</label>
                </div>
                <div className="input-box">
                  <span className="icon">
                    <FaRegEnvelope></FaRegEnvelope>
                  </span>
                  <input
                    className="p-5"
                    type="email"
                    required
                    name="email"
                    id=""
                  />
                  <label className="lebel-container">Email</label>
                </div>
                <div className="input-box">
                  <span className="icon">
                    <FaUnlock></FaUnlock>
                  </span>
                  <input type="password" name="password" required id="" />
                  <label>Password</label>
                </div>
                <div className="remember-forgot">
                  <label>
                    <input type="checkbox" name="" id="" />
                    Remember Me
                  </label>
                </div>
                <button className="submit-btn" type="submit">
                  Register
                </button>
                <div className="register-link">
                  <p>
                    Please Going to Login :{" "}
                    <Link to="/login" className="hover:text-blue-600 underline">
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    );
};



export default Register;