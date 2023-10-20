import React, { useState } from 'react';

function App() {
  // Utilisez le hook useState pour gérer l'état de "nb"
  const [personne, setPersonne] = useState({
    firstName : "Essoh",
    lastName : "yannick",
    age : 18
  });
  const [nb, setNb] = useState(0)

  function increment() {
    console.log('Bonjour');
    setPersonne({ ...personne, age : personne.age++});
  }

  function incrementCont() {
    console.log('Bonjour nb');
    setNb(nb + 1);
  }

  return (
    <>
      <h1>Compteur de l'age {personne.age} </h1>
      <button onClick={increment}>Incrémenter</button><br /><br />
      <button onClick={incrementCont}>IncrémenterCOUNT {nb}</button>
    </>
  );
}

export default App;
