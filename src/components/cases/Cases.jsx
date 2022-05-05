import React from "react";
import "./cases.css";

const Cases = (props) => {
  return (
    <div className={`cases ${props.x ? "x" : "o"}`} {...props}>
      {props.x ? "X" : props.o ? "O" : ""}
    </div>
  );
};

export default Cases;
