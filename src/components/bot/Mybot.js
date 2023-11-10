import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from './config.js';
import MessageParser from './MessageParser.js';
import ActionProvider from './ActionProvider.js';
import React from 'react'
import Microphone from '../Microphone.js';

export default function Mybot() {
  return (
    <>
    <div className="container">
        <Microphone/>
    </div>
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider} 
        />
    </div>
    </>
  )
}
