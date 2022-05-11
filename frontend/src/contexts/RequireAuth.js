import React, {useContext} from "react";
import { Navigate, useLocation } from "react-router-dom";

import {useAuthContext, AuthContext} from '../contexts/AuthContext'

const RequireAuth = ({children}) => {
    
    const {userInfo} = useAuthContext()
    console.log(userInfo)
    const location = useLocation()

    if(userInfo.name === "") {
        return <Navigate to="/auth/login" state={{ from : location }} replace />
    }

    return children
}

export default RequireAuth