import { createContext, useLayoutEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "@/libs/firebase";
import useAxios from "@/hooks/useAxios";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const axios = useAxios();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [loader, setLoader] = useState(true);

  const signIn = (email, pass) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const signUp = (email, pass) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const signOutAccount = () => {
    setLoader(true);
    return signOut(auth);
  };

  const handleGoogle = () => {
    setLoader(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  useLayoutEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        axios
          .post("/authentication/login", {
            name: currentUser.displayName,
            email: currentUser.email,
            userID: currentUser.uid,
          })
          .then(({ data }) => {
            if (data.success) {
              setToken(data?.token);
              setUserDetails(data?.user);
            }
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        setToken(null);
        setUserDetails(null);
      }
      setLoader(false);
    });
    return () => {
      unSubscribe();
    };
  }, [axios]);

  return (
    <AuthContext.Provider
      value={{
        user,
        loader,
        signUp,
        signIn,
        handleGoogle,
        token,
        userDetails,
        signOutAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthContextProvider;
