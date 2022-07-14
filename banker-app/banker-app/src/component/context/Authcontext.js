import React, { createContext, useState } from "react";
export const Authcontext = createContext();
function AuthcontextProvider(props) {
  const [isAuthanticated, setisAuthanticated] = useState(false);
  return (
    <Authcontext.Provider value={{ isAuthanticated, setisAuthanticated }}>
      {props.children}
    </Authcontext.Provider>
  );
}

export default AuthcontextProvider;
