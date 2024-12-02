import Header from "./Header";
import Footer from "./Footer";
import ListPokemons from "./ListPokemons";
import Faq from "./Faq";

const App = () => {
  return (
    <>
      <Header />

      {/* Quand j'appelle le composant Faq, ça execute la fonction
  Faq et ça affiche sur mon navigateur le HTML lié au JSX retourné par la fonction
  C'est ce qu'on appelle un rendu
 */}
      <Faq />

      <Footer />
    </>
  );
};

export default App;
