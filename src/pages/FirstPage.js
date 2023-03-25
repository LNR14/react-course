import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";

import '../icons/fontawesome'



export default function FirstPage() {
  return (
    <div className="App">
      <h3>React Facts</h3>
      <h4>React course - Project 1</h4>
      ` <FontAwesomeIcon icon={faCircleDot} />
      <hr/>
    </div>
  );
}