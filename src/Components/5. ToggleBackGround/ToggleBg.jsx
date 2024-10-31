import React, { useState } from "react";
import "./style.css";
const ToggleBg = () => {
  const [bgColor, setBgColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
 
  const changeBg = () =>{
    setBgColor(bgColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b")
  }
  return (
    <section
      className="container"
      style={{ background: `${bgColor}`, color: `${textColor}` }}
    >
      <button style={{ border: `2px solid ${textColor}`, color:`${textColor}`}} onClick={changeBg}>{bgColor === "white"? "White Theme" : "Black Theme" }</button>

      <section className="content">
        <h1>
          Welcome To A <br />
          Real World...
        </h1>
      </section>
    </section>
  );
};

export default ToggleBg;
