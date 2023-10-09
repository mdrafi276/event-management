
import {   FaUnlock,FaCamera, FaPen, FaRegEnvelope } from "react-icons/fa";
import swal from "sweetalert";

import './Register.css'
import { Link, useLocation, useNavigate } from "react-router-dom";

import { AuthContext,  } from "../../../Provider/AuthProvider";
import { useContext, useState } from "react";
import Navber from "../../Navber/Navber";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";



const Register = () => {
  const [error, setError] = useState('')
const {createUser} = useContext(AuthContext)
 const location = useLocation();
 const navigate = useNavigate()
  const  handleRegister = e =>{
    console.log("hello");
   e.preventDefault();
   const email = e.target.email.value;
   const password = e.target.password.value;
   const photo = e.target.photo.value;
   const name = e.target.name.value;
   console.log(email, password , name, photo);
  //  setRegisterErrror('')

  //  if(password.length < 6){
  //   setRegisterErrror("Password should be must 6 Cherecters longer")
  //  }
  //  create user on register
  setError('')

  if(password.length < 6){
    setError(
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Pass should have at 6 ceracters or longer!",
        footer: '<a href="">Why do I have this issue?</a>',
      })
    );
    return;
  }else if(/^(?=.*[/W_]).*$/.test(password)){
   setError(
     Swal.fire({
       icon: "error",
       title: "Oops...",
       text: "Your password should have at last upper case  and Special cheracters !",
       footer: '<a href="">Why do I have this issue?</a>',
     })
   );
    return;
  }else{
 createUser(email, password)
   .then((result) => {
     updateProfile(result.user, {
       displayName: name,
       photoURL: photo,
     }).then(() => {
       swal("Success!", "Your register Success", "success");
     });
     // navigate ater register
     navigate(location?.state ? location.state : "/");
   })
   .catch((error) => {
     Swal.fire({
       icon: "error",
       title: "Oops...",
       text: "  wrong!",
       footer: '<a href="">Why do I have this issue?</a>',
     })(error);
   });
  }
 
  }
    return (
      <div>
        <Navber></Navber>

        <div className="body">
          <section>
            <div
              className="login-box"
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1200"
            >
              <form onSubmit={handleRegister}>
                <div className="input-box">
                  <span className="icon">
                    <FaPen></FaPen>
                  </span>

                  <input type="text" name="name" required id="" />
                  <label>Name</label>
                </div>
                <div className="input-box">
                  <span className="icon">
                    <FaCamera></FaCamera>
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
                <button id="i-am-tu-obak" className="submit-btn" type="submit">
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