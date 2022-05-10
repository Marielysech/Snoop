import React, { useContext, useState } from "react";

export const AuthContext = React.createContext({});

const AuthContextProvider = ({children}) => {

  const [userInfo, setUserInfo] = useState({name: "", userName: "", email: ""})
  console.log('this are the logged user info ' + userInfo.name + ' ' + userInfo.email + ' ' + userInfo.userName)


  return (
    <AuthContext.Provider value={{userInfo, setUserInfo}}>
    {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
