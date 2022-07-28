import React from "react";
import "../Avtar/Avtar.css";

function Avtar({ name, image, backgroundColor }) {
  const getInitials = (label) => {
    let splitted = label.split(" ");
    if (splitted.length === 1) return splitted[0][0];
    return splitted[0][0] + splitted.at(-1)[0];
  };
  return (
    <>
      <div
        className="Avtar"
        style={{
          background: `url(${image})`,
          border: !image && "1px solid grey",
          backgroundColor,
        }}
      >
        <h4 style={{ fontSize: "40px " }}>{getInitials(name)}</h4>
      </div>
    </>
  );
}

export default Avtar;

Avtar.defaultProps = {
  name: "0",
  color: "black",
  backgroundColor: "crimson",
};
