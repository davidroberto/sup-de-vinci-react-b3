const ShowPokemon = () => {
  const pokemon = {
    name: "Pikachu",
    type: "Electric",
    color: "Yellow",
    hp: 100,
    attack: 50,
    defense: 40,
    evolution: {
      name: "Raichu",
      type: "Electric",
      color: "Yellow",
      hp: 120,
      attack: 70,
      defense: 60,
    },
  };

  return (
    <article>
      <p>Name: {pokemon.name}</p>
      <p>Type: {pokemon.type}</p>
      <p>Color: {pokemon.color}</p>
      <p>HP: {pokemon.hp}</p>
      <p>Attack : {pokemon.attack}</p>
      <p>Defense : {pokemon.defense}</p>

      <p>Evolution Name: {pokemon.evolution.name}</p>
      <p>Evolution Type: {pokemon.evolution.type}</p>
      <p>Evolution Color: {pokemon.evolution.color}</p>
      <p>Evolution HP: {pokemon.evolution.hp}</p>
      <p>Evolution Attack: {pokemon.evolution.attack}</p>
      <p>Evolution Defense: {pokemon.evolution.defense}</p>
    </article>
  );
};

export default ShowPokemon;
