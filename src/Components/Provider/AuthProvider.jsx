import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import  app from "../../Firebase/firebase.config"
   const AuthContext = createContext(null);
 const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
        return signOut(auth);
       

    }
    useEffect(()=>{
      const unSubscribe =   onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
         console.log("use in the auth state  change", currentUser );
      });
      return () => unSubscribe();
       
    },[])
      const info = {
        user,
        createUser,
        logOut,
        signIn,
    }
    return (
        <AuthContext.Provider value={info}> {children}
           
        </AuthContext.Provider>)
    }

export  {AuthProvider , AuthContext};