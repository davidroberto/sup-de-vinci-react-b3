const ListPokemons = () => {
  const pokemons = [
    {
      id: 1,
      name: "Bulbasaur",
      type: "Grass",
    },
    {
      id: 2,
      name: "Ivysaur",
      type: "Grass",
    },
    {
      id: 3,
      name: "Venusaur",
      type: "Grass",
    },
  ];

  return (
    <main>
      {pokemons.map((pokemon) => {
        return (
          <article>
            <p>{pokemon.name}</p>
          </article>
        );
      })}
    </main>
  );
};

export default ListPokemons;
