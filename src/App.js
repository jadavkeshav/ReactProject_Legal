import './App.css';
import React from 'react';  
import Navbar from './components/Navbar';
import MyBackGround from './components/MyBackGround';
import { Routes, Route} from "react-router-dom";
import About from "./components/pages/About";
import Mybot from './components/bot/Mybot.js';
import CharSpeak from './components/ChatSpeak.js';
import Phone from './components/pages/Phone.js';
import Questions from './components/pages/Questions.js';
import VoiceAssistant from './components/pages/VoiceAssistant.js';
// import ButtonAnimation from './components/pages/ButtonAnimation.js';

function App() {
  return (
    <div className="App">
      <Navbar title="Nyaay Sahayak" />
      <Routes>
        <Route index element={<MyBackGround />} />
        <Route path='about' element={<About />} />
        <Route path='ChatBot' element={<><Mybot/> <CharSpeak/></>} />
        <Route path='Phone' element={<Phone/>} />
        <Route path='off' element={<Questions/>} />
        <Route path='voice' element={<VoiceAssistant/>} />
      </Routes>
      
      
    </div>
  );
}
export default App;
