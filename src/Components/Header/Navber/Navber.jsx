import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navber = () => {
     const { user,logOut } = useContext(AuthContext);
     const handleSignOut = () =>{
     logOut()
     .then()
     .catch()
     }

     const navLink = (
       <>
         <li>
           <Link to="/">Home</Link>
         </li>
         <li>
           <Link to="/allDetails"> All Details</Link>
         </li>
         <li>
           <Link to="/serviceData/:id">Extra Details</Link>
         </li>
         <li>
           <Link to="/register">Register</Link>
         </li>
       </>
     );

     return (
       <div className="bg-gray-200 ">
         <div className="  md:-w-full lg:max-w-6xl mx-auto">
           <div className="navbar rounded-lg">
             <div className="navbar-start">
               <h1
                 id="title-h1"
                 className="lg:text-2xl gap-2 flex items-center md:text-xl text-[15px] "
               >
                 {" "}
                 <span>
                   <img className="w-10 rounded-full" src="/src/assets/logo.jpg" alt="" />
                 </span>
                 <span>EDUCONFOMASTER</span>
               </h1>
               <div className="dropdown">
                 <label tabIndex={0} className="btn btn-ghost lg:hidden">
                   <h1>hello world</h1>
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                   >
                     <path
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth="2"
                       d="M4 6h16M4 12h8m-8 6h16"
                     />
                   </svg>
                 </label>
                 <ul
                   tabIndex={0}
                   className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                 >
                   {navLink}
                 </ul>
               </div>
             </div>
             <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">{navLink}</ul>
             </div>
             <div className="navbar-end">
               <label tabIndex={0} className=" btn btn-ghost btn-circle avatar">
                 <div className="w-10 rounded-full">
                   <img src="./src/assets/user.png" alt="" />
                 </div>
               </label>
               {user ? (
                 <button
                   onClick={handleSignOut}
                   className="btn bg-orange-600 hover:bg-black hover:text-white "
                 >
                   LogOut
                 </button>
               ) : (
                 <Link to="/login">
                   <button className="btn bg-orange-600 hover:bg-black hover:text-white ">
                     Login
                   </button>
                 </Link>
               )}
             </div>
           </div>
         </div>
       </div>
     );
};

export default Navber;