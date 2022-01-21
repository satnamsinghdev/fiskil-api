import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Authentication/Login";
import Dashboard from "./Dashboard/Dashboard";
import Accounts from "./pages/Accounts";
import PrivateRoutes from './utils/PrivateRoutes';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route exact path="/" element={<PrivateRoutes><Dashboard /></PrivateRoutes>} />
        <Route path="/accounts" element={<PrivateRoutes><Accounts /> </PrivateRoutes>} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
