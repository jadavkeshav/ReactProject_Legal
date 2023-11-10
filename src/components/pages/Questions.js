import React, { useState } from 'react';

export default function Questions() {
const [isMicOn, setIsMicOn] = useState(false);

const toggleMic = () => {
  setIsMicOn(!isMicOn);
};

return (
  <div className="App">
    <button  onClick={toggleMic}>{isMicOn ? (<img src="micon.png" alt="Mic On" />) : (<img style={{"width":"10"}} src="src\components\pages\voice-recording.png" alt="Mic Off" />)}
    </button>
  </div>
  );
}

