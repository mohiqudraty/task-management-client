import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
  import { getAuth } from "firebase/auth";
  import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
  const auth = getAuth(app);

  
  export const AuthContext = createContext(null);
  
  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
  
    // create user  --------
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    //  register with google------------------
    const registerWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    };
  
    // login user --------------
    const loginUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    // logout user----------------
    const logoutUser = () => {
      return signOut(auth);
    };
  
    // auth state observer------------------
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log("observe", currentUser);
        setLoading(true);
        setUser(currentUser);
        setLoading(false);
      });
      return () => unsubscribe();
    }, []);
  
    const authInfo = {
      createUser,
      registerWithGoogle,
      loginUser,
      logoutUser,
      user,
      loading,
    };
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
  };
  
  export default AuthProvider;
  