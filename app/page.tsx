"use client";

import React, { useState } from "react";

const ColorGenerator = () => {
  const [color, setColor] = useState("#FFFFFF");

  const generateColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <div
        style={{
          backgroundColor: color,
          height: "200px",
          width: "200px",
          margin: "0 auto",
          border: "2px solid black",
          borderRadius: "10px",
        }}
      />
      <h3>{color}</h3>
      <button
        onClick={generateColor}
        style={{
          cursor: "pointer",
          padding: "10px 25px",
          border: "2px solid white",
          borderRadius: "10px",
          backgroundColor: "black",
          color: "white",
        }}
      >
        Gere uma cor
      </button>
    </div>
  );
};

export default ColorGenerator;
