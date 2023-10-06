
import { FaYoutube, FaArrowAltCircleUp } from "react-icons/fa";

import './Login.css'
import Navber from "../../Navber/Navber";
const Login = () => {
    return (
      <div>
        <Navber></Navber>
        <div className="body">
          <section>
            <div className="login-box">
              <form>
                <h2>Login</h2>
                <div className="input-box">
                  <span className="icon">
                    <FaYoutube></FaYoutube>
                  </span>
                  <input className="p-5" type="email" name="" id="" />
                  <label>Email</label>
                </div>
                <div className="input-box">
                  <span className="icon">
                    <FaArrowAltCircleUp></FaArrowAltCircleUp>
                  </span>
                  <input type="password" name="" id="" />
                  <label>Password</label>
                </div>
                <div className="remember-forgot">
                  <label>
                    <input type="checkbox" name="" id="" />
                    Remember Me
                  </label>
                  <a href="#">Forgot Password?</a>
                </div>
                <button className="submit-btn" type="submit">
                  Login
                </button>
                <div className="register-link">
                  <p>
                    Donot have an accoutn?{" "}
                    <a className="text-blue-600 underline" href="#">
                      Register
                    </a>
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