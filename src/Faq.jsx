import { useState } from "react";

const Faq = () => {
  // je créé une variable de state
  // c'est à dire une variable en dehors du composant
  // comme une base de données pour le composant
  // et je l'initilise à false
  const [isResponseDisplayed, setIsResponseDelayed] = useState(false);

  // je créé une fonction qui est executée au moment ou l'utilisateur
  // clique sur la question
  const diplayResponse = () => {
    // au click sur le bouton
    // je modifie la variable de state à true
    // en utilisant la fonction fournie par use state
    // qui permet de rechargement automatiquement le composant
    setIsResponseDelayed(true);
  };

  // je créé le JSX permettant de créer le HTML
  return (
    <section>
      <p onClick={diplayResponse}>Comment sont calculés les frais de port ?</p>
      {isResponseDisplayed && <p>C'est 3000e fixe par envoi.</p>}
    </section>
  );
};

export default Faq;
