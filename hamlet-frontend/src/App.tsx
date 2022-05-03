import React from 'react';
// import logo from './logo.png';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/main';
import Login from './pages/LogIn/login';
import Signup from './pages/SignUp/signup';
import WaitingRoomPlayer from './pages/WaitingRoomPlayer/WaitingRoomPlayer';
import Game from './pages/Game/Game';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Main/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/WaitingRoomPlayer" element={<WaitingRoomPlayer/>} />
        <Route path="/Game" element={<Game/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
