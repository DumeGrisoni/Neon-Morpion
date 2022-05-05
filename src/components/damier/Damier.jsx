import React, { useState } from "react";
import Cases from "../cases/Cases";
import "./damier.css";
import uuid from "react-uuid";

const gridCases = () => new Array(9).fill(null);

const Damier = () => {
  const [cases, setCases] = useState(gridCases());

  const handleCase = (index) => {
    let newCases = cases;
    newCases[index] = "x";
    setCases([...newCases]);
  };

  return (
    <div className="damier">
      {cases.map((box, index) => (
        <Cases
          key={uuid()}
          x={box === "x" ? 1 : 0}
          o={box === "o" ? 1 : 0}
          onClick={() => handleCase(index)}
        />
      ))}
    </div>
  );
};

export default Damier;
