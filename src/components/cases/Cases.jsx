import React from "react";
import "./cases.css";

// Création d'une condiion : si l'index de la case cochée est x alors on insert un X
const Cases = (props) => {
  return (
    <div className={`cases ${props.x ? "x" : "o"}`} {...props}>
      {props.x ? "X" : props.o ? "O" : ""}
    </div>
  );
};

export default Cases;
