
import {  FaGoogle, FaRegEnvelope,  FaUnlock } from "react-icons/fa";

import './Login.css'
import Navber from "../../Navber/Navber";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
const Login = () => {
  const {signIn} = useContext(AuthContext)
     const handleLogin = e =>{
      console.log('hello world');
      e.preventDefault();
     const email = e.target.email.value;
     const password = e.target.password.value;
      console.log(email, password);
      signIn(email,password)
      .then(result =>{
        console.log(result.user);
      })
      .catch(error=>{
        console.error(error);
      })
     }

    return (
      <div>
        <Navber></Navber>
        <div className="body">
          <section>
            <div className="login-box">
              <form onSubmit={handleLogin}>
                <h2>Login</h2>
                <div className="input-box">
                  <span className="icon">
                    <FaRegEnvelope></FaRegEnvelope>
                  </span>
                  <input
                    className="p-5"
                    type="email"
                    name="email"
                    required
                    id=""
                  />
                  <label className="">Email</label>
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
                    <input type="checkbox" name="checkbox" id="" />
                    Remember Me
                  </label>
                  
                </div>
                <button className="submit-btn" type="submit">
                  Login
                </button>
                <div className="register-link">
                  <p>
                    Donot have an accoutn?{" "}
                    <Link to="/register" className="text-blue-600 underline">
                      Register
                    </Link>
                  </p>
                  <p className="">
                   
                    <button className="btn mt-8 hover:bg-white rounded-full hover:text-black btn-outline w-full">
                      <FaGoogle></FaGoogle>
                      Google
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    );
};

export default Login;