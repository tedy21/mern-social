import React  from 'react';
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Messenger from "./pages/messenger/Messenger";

import Profile from './pages/profile/Profile';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';


  

function App() { 
      const{user}=useContext(AuthContext)

  return (
     <Router>
      <Routes>
          <Route path="/" element=
          {user? <Home/>:<Register/>} />
    </Routes>

    <Routes>
          <Route path="/login" element=
          {user?< Navigate to="/"/>: <Login/>} />
    </Routes>
  
    <Routes>
          <Route path="/register" element=
       {user?< Navigate to="/"/>:   <Register/>} />

    </Routes>

    <Routes>
          <Route path="/messenger" element=
       {!user?< Navigate to="/"/>:   <Messenger/>} />

    </Routes>

    <Routes>
          <Route path="/profile/:username" element={<Profile/>} />
    </Routes>

     </Router>
  );
  
}

export default App;
