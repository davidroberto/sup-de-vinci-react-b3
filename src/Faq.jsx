import { useState } from "react";

const Faq = () => {
  const [isResponseDisplayed, setIsResponseDelayed] = useState(false);

  const diplayResponse = () => {
    setIsResponseDelayed(true);
  };

  return (
    <section>
      <p onClick={diplayResponse}>Comment sont calculés les frais de port ?</p>
      {isResponseDisplayed && <p>C'est 3000e fixe par envoi.</p>}
    </section>
  );
};

export default Faq;
