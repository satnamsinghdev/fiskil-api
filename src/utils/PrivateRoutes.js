import React from 'react';
import IsAuthenticated from '../Authentication';
import { Navigate, Route } from 'react-router';

const PrivateRoutes = ({children}) => {

    if(IsAuthenticated()){
        return children;
    }
     else {
        return <Navigate to="/login" />
     }  
};

export default PrivateRoutes;
