import React from 'react';
// import logo from './logo.png';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/main';
import Login from './pages/LogIn/login';
import Signup from './pages/SignUp/signup';
<<<<<<< HEAD
import WaitingRoomPlayer from './pages/WaitingRoomPlayer/WaitingRoomPlayer';
import Game from './pages/Game/Game';
=======
import Admin from './pages/Admin/Admin';
>>>>>>> 05c0232451d7cab136ca4ffbb73b49a03cffff15

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Main/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
<<<<<<< HEAD
        <Route path="/WaitingRoomPlayer" element={<WaitingRoomPlayer/>} />
        <Route path="/Game" element={<Game/>} />
=======
        <Route path="/admin" element={<Admin/>} />
>>>>>>> 05c0232451d7cab136ca4ffbb73b49a03cffff15
      </Routes>
    </BrowserRouter>
  );
}

export default App;
