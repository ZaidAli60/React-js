import React, { createContext, useContext, useState ,useEffect} from "react";
import {auth} from '../config/firebase'
import { onAuthStateChanged } from "firebase/auth";
 const Authcontext = createContext();
const AuthcontextProvider = ({ children }) => {
  const [isAuthanticated, setisAuthanticated] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setisAuthanticated(true)
      } else {
        setisAuthanticated(false)
        setUser({})
      }
    });
  }, []);

  return (
    <Authcontext.Provider value={{ isAuthanticated, 
    setisAuthanticated ,
    user,
    }}>
      {children}
    </Authcontext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(Authcontext);
};

export { AuthcontextProvider, Authcontext };
