import React, { useState } from 'react';
import './App.css';

import Home from './pages/Home';
import LogIn from './pages/LogIn';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './pages/SignUp';
import Header from './components/Header';



function App() {
   
  const [username, setUsername] = useState('');
  const loggedin = localStorage.getItem("isLoggedIn");

  

  return (
    <div>
      
      <Router>
      <Header username={username}/>
        <Routes>

          <Route path="/home" element={<Home />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/" element={loggedin ? Home : <LogIn setUsername={setUsername}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
