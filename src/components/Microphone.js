import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import { useNavigate } from 'react-router-dom';
import './Micro.css';

const Microphone = () => {
  const { transcript, listening , resetTranscript ,  isMicrophoneAvailable,browserSupportsSpeechRecognition } = useSpeechRecognition();
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
    "lost my bike": "If your bike is lost, you should immediately file a First Information Report (FIR) at the nearest police station. Provide all the necessary details about the bike and the circumstances of its loss. Additionally, inform your insurance company about the incident.",
    "What are my rights if I am arrested?": "If you are arrested, you have the right to remain silent and consult with a lawyer. You should be informed of the charges against you. It is advisable not to make any statements without legal representation. Exercise your right to legal counsel during questioning.",
    "workplace harassment":"If you are facing workplace harassment, document the incidents and report them to your employer's internal complaints committee, if available. If the issue persists, you can file a complaint with the local sexual harassment ombudsman. Consult with a legal professional for guidance on the appropriate course of action.",
    "protect my property":"To protect your intellectual property in India, you can register trademarks, copyrights, and patents with the relevant authorities. It is advisable to conduct thorough research and seek legal advice to ensure proper protection. Enforcing your intellectual property rights may require legal action in case of infringement.",
    "legal requirements for starting a business":"To start a business in India, you need to register your company with the Ministry of Corporate Affairs, obtain the necessary business licenses, and comply with tax regulations. Consulting with a legal expert can help ensure that you meet all legal requirements.",
    "property dispute with my neighbor":"If you have a property dispute with your neighbor, attempt to resolve it amicably. If unsuccessful, consult with a lawyer and consider mediation. If needed, file a suit in the appropriate civil court. Providing evidence and documentation is crucial to supporting your case.",
    "protect my online business from cyber threats":"To protect your online business from cyber threats in India, implement robust cybersecurity measures. Comply with the Information Technology Act and rules, including data protection and privacy regulations. Regularly update security protocols and educate employees about cyber threats to minimize risks.",
    "vehicle accident":"In the event of a motor vehicle accident, inform the nearest police station immediately and seek medical help for any injuries. Exchange information with the other party involved and gather evidence such as photographs. Notify your insurance company promptly and file a police report if required.",
    "What are the legal rights of tenants in India":"Tenants in India have various rights, including the right to a fair tenancy agreement, the right to peaceful possession of the property, and protection from unfair eviction. Tenants are also entitled to essential services. Familiarize yourself with the rent control laws applicable in your state for a comprehensive understanding of your rights.",
    "How can I protect my creative work under Indian copyright law":"To protect your creative work under Indian copyright law, register your work with the Copyright Office. This registration serves as evidence in legal proceedings. Additionally, mark your work with the copyright symbol and your name. In case of infringement, consult with a lawyer to take appropriate legal action."
  }
  let clickHandler = () => {
    const userWords = transcript.toLowerCase().split(" ");
    for (var i = 0; i < userWords.length; i++) {
      if (userWords[i] in data.toLowerCase()) {
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
      <button style={{"padding":"30px", "marginRight":"20px"}} onClick={ clicks }>{listening ? 'stop' : 'start'}</button>
      <button  style={{"padding":"30px", "marginRight":"20px"}} onClick={ resetTranscript }>Reset</button>
      <p>{transcript}</p>
    </div>
    <div>
      <h1>{mytranscript}</h1>
    </div>
    </>
  );
};
export default Microphone;