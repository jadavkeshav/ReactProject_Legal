import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function VoiceAssistant() {
    const { transcript, listening, resetTranscript, isMicrophoneAvailable, browserSupportsSpeechRecognition } = useSpeechRecognition();
    const [mytranscript, newtranscript] = useState(transcript);
    
    const data = {
        "hi": "hi good morning how can i help u today?",
        "lost my bike": "Oh sorry to hear that , if lost your bike First search in nearby location.If u cant find it search nearby police station and file a complaint",
        "phone": "report to police "
      }

    
    function responsegenerator()
{
    const userWords = transcript.split(" ");
    for (let i = 0; i < userWords.length; i++) {
        if (userWords[i] in data) {
            newtranscript(data[userWords[i]]);
            break;
        }        
    }
}




    if (!browserSupportsSpeechRecognition) {
        return null;
      }
      if (!isMicrophoneAvailable) {
        alert('MicroPhone access is denied');
      }




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
            responsegenerator();
        }
      }
    function clicks(){
        check();
        submit();
      }
    function reset(){
        resetTranscript();
        newtranscript(' ');
      }
    return (
        <>
            <div>
                <div className="row">
                    <div className="col-4 d-flex flex-column align-items-center justify-content-center"
                        style={{ height: "95vh" }}>
                        <div className="text-center my-5">
                        <button class="btn btn-success" style={{ "padding": "30px", "marginRight": "20px" }} onClick={clicks}>{listening ? 'stop' : 'start'}</button>
                        <button class="btn btn-warning" style={{ "padding": "30px", "marginRight": "20px" }} onClick={reset}>Reset</button>
                        </div>
                    </div>
                    <div className="col-8 d-flex flex-column align-items-center justify-content-center" style={{ height: "95vh", backgroundColor: "" }} >
                        <div className="response " style={{ height: "85vh", width: "100vh", backgroundColor: "" }} >
                            <div className="row-2" style={{ backgroundColor: "", padding: "2%", margin: "2%" }} >
                                {transcript}
                            </div>
                            <div className="row-2" style={{ backgroundColor: "", padding: "2%", margin: "2%", height: "70vh" }}>
                                {mytranscript}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
