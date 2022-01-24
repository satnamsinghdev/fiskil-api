import React from 'react';
import IsAuthenticated from '../Authentication';
import { Navigate, Route } from 'react-router';
import { DashboardLayout } from '../Dashboard';

const PrivateRoutes = ({children}) => {

    if(IsAuthenticated()){
        return (
            <DashboardLayout>
                {children}
            </DashboardLayout>
        )
    }
     else {
        return <Navigate to="/login" />
     }  
};

export default PrivateRoutes;
