import React, { useState } from "react";


/** Showing an answer message when clicking on the eightball
 *
 * Props:
 * -message
 * -color
 *
 * State:
 * - isPushed: false / true
 * - color: black / random colors:(red / goldenrod / green)
 * - msg: Think of a question / Random message picked from answers
 *
 * App -> Eightball -> displays message & corresponding color
 *
*/

function Eightball({ answers }) {
  const [pushed, setPushed] = useState(false);
  const [color, setColor] = useState("black");
  const [msg, setMsg] = useState("Think of a question");


  function handleClick() {
    const randomNum = Math.floor(Math.random() * answers.length);
    setPushed(true);
    setColor(answers[randomNum].color);
    setMsg(answers[randomNum].msg);
  }
  return (
    <div>
      <button
        onClick={handleClick}
        style={{backgroundColor: color}}>
        {pushed ? `${msg}` : "Think of a question"}
      </button>
    </div>
  );

}


export default Eightball;