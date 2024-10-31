import { useState } from "react";
import { accordionData } from "./Content";
import "./style.css"
const Accordions = () => {
  const accordion = (title, content) => {
    const [isActive, setIsActive] = useState(false);
    return (
      <section className="card" key={Math.random()}>
        <div className="header" onClick={() => setIsActive(!isActive)}>
          <div className="title">{title}</div>
          <div>{isActive ?  "+" : "-"} </div>
        </div>
        <div>{isActive ? <div>{content}</div> : ""}</div>
      </section>
    );
  };
  return (
    <section className="container">
      {accordionData.map((data) => accordion(data.title, data.content))}
    </section>
  );
};

export default Accordions;
