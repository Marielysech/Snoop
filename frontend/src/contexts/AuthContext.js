import React, { useContext, useState, useEffect } from "react";

export const AuthContext = React.createContext({});

const AuthContextProvider = ({children}) => {

  const [userInfo, setUserInfo] = useState({name: "", userName: "", email: ""})
  

  async function getLoggedUser() {
		const response = await fetch(`/auth/getuser`, {
			method: 'GET',
			credentials: 'include',
			headers: { Accept: 'application/json'},
		});

		try {
			const data = await response.json();
			setUserInfo(data);
		} catch {
			return null;
		}
	}

	useEffect(() => {
		getLoggedUser();
	}, []);


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
