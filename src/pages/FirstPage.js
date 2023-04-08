import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot,faTerminal } from "@fortawesome/free-solid-svg-icons";
import "./CSS/firstPage/firstpage.css"
import '../icons/fontawesome'



export default function FirstPage() {
  return (
    <div className="App">
      <h3>React Facts</h3>
      <h4>React course - Project 1</h4>
       <span><FontAwesomeIcon icon={faTerminal} /></span>
      <hr/>
    </div>
  );
}