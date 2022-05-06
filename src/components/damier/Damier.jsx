import React, { useState, useEffect } from "react";
import Cases from "../cases/Cases";
import "./damier.css";
import uuid from "react-uuid";

const lignesGagnantes = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// utilisation d'un tableau de 9 éléments etant remplient par aucune données. Ce tableau sert à mapper les differentes cases.
const gridCases = () => new Array(9).fill(null);

const Damier = () => {
  const [cases, setCases] = useState(gridCases());

  //A chaque fois qu'une case change d'index (x ou o) et que le tour n'est pas celui du joueur alors la fonction sera lancée et l'ordinateur mettra un index 'o' sur la case vide présélectionnée.
  useEffect(() => {
    const tourOrdinateur = cases.filter((box) => box !== null).length % 2 === 1;

    const cliqueOrdinateur = (index) => {
      let newCases = cases;
      newCases[index] = "o";
      setCases([...newCases]);
    };

    if (tourOrdinateur) {
      //console.log("Ordi");
      const casesVides = cases
        .map((box, index) => (box === null ? index : null)) // Vérification des cases vides et renvoie de l'index de si la case est bien vide, sinon on le renvoie rien.
        .filter((res) => res !== null); // création d'un tableau avec les resultats qui sont differents de null (cases vides)
      //console.log(casesVides);

      //retour un chiffre (index) aleatoire sur un index de case vide arrondi a l'entier superieur
      const casesVidesAleatoires =
        casesVides[Math.ceil(Math.random() * casesVides.length)]; // exemple length = 8, ramdom = 0.4 alors le resultat final sera 3.4 arrondi a 4.

      cliqueOrdinateur(casesVidesAleatoires);
    }
  }, [cases]);

  // Fonction permettant d'ajouter un index X sur la case cliquée si c'est au tour du joueur, sinon ca sera celui de l'ordinateur
  const handleCase = (index) => {
    // Verification si c'est au joueur de cliquer grace a la creation d'un nouveau tableau qui prend toutes les cases differentes de null et divise par 2 le nombre de cases restantes. Si le modulo est égale a 0 alors c'est au tour du joueur de cliquer.
    const tourJoueur = cases.filter((box) => box !== null).length % 2 === 0;
    // console.log(tourJoueur);// Si false alors c'est à lordinateur de jouer

    if (tourJoueur) {
      let newCases = cases;
      newCases[index] = "x";
      setCases([...newCases]);
    }
  };

  // Pour chaque cases (box), on lui donne un index égale a 0, quand l'utilisateur clique cet index devient X, il deveindra O si c'est l'ordinateur qui clique grâce a la fonction handleCase
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
