import { useState } from "react";

const PokemonWalk = () => {
  const [displayAttack, setDisplayAttack] = useState(false);

  setTimeout(() => {
    setDisplayAttack(true);
  }, 5000);

  return (
    <section>
      <p>Vous vous baladez dans Bourg Palette</p>

      {displayAttack && <p>Un Ratatat sauvage apparait et vous défie</p>}
    </section>
  );
};

export default PokemonWalk;
