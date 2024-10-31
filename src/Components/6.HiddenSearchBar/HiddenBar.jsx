import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./style.css";

const HiddenBar = () => {
  const [bgColor, setBgColor] = useState("white");
  const [showInput, setShowInput] = useState(false);

  const handledClick = (e) => {
    setBgColor("#1b1b1b")
    if (e.target.className === "container") {
      setBgColor("white");
      setShowInput(false);
    }
  };
  return (
    <section
      className="container"
      style={{ background: bgColor }}
      onClick={(e) => handledClick(e)}
    >
      {showInput ? (
        <input type="text" placeholder="Search..." />
      ) : (
        <FaSearch className="search-icon" onClick={() => setShowInput(true)} />
      )}
    </section>
  );
};

export default HiddenBar;
