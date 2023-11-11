import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import { useNavigate } from 'react-router-dom';
import './Micro.css';

const Microphone = () => {
  const { transcript, listening , resetTranscript ,  isMicrophoneAvailable,browserSupportsSpeechRecognition } = useSpeechRecognition();
  // const navigate = useNavigate();
  const [mytranscript, newtranscript] = useState(transcript);
  function check() {
    if (listening)
    {
      SpeechRecognition.stopListening()
    }
    else{
      SpeechRecognition.startListening({ continuous: true })
    }
  }

  function submit(){
    if (!listening ){
      return null;
    }
    else{
      clickHandler();
    }
  }
  
  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  if (!isMicrophoneAvailable) {
    alert('Micrpphone access is denied');
  }
  const data = {
    "hi": "hi good morning how can i help u today?",
    "lost my bike": "Oh sorry to hear that , if lost your bike First search in nearby location.If u cant find it search nearby police station and file a complaint",
    "phone": "report to police "
  }
  let clickHandler = () => {
    // Check for keywords in the transcript and navigate to appropriate components
    // if (transcript.includes('phone')) {
    //   navigate('/phone');
    // }
    const userWords = transcript.split(" ");
    for (var i = 0; i < userWords.length; i++) {
      if (userWords[i] in data) {
        newtranscript(data[userWords[i]]);
        break ;
      }
    }

  }
  function clicks(){
    check();
    submit();
  }

  return (

    <>
    <div>
      <button onClick={ clicks }>{listening ? 'stop' : 'start'}</button>
      <button onClick={ resetTranscript }>Reset</button>
      <p>{transcript}</p>
    </div>
    <div>
      <h1>{mytranscript}</h1>
    </div>
    </>
  );
};
export default Microphone;