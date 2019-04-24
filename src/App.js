import React from 'react';
import './App.css';

const UNDERSCORE = '_'

// Produit une représentation textuelle de l’état de la partie,
// chaque lettre non découverte étant représentée par un _underscore_.
// (CSS assurera de l’espacement entre les lettres pour mieux
// visualiser le tout).
function computeDisplay(phrase, usedLetters) {
  return phrase.replace(/\w/g,
    (letter) => (usedLetters.has(letter) ? letter : UNDERSCORE)
  )
}


function App() {
  return (
    <div className="">

    </div>
  );
}

export default App;
