import { useState } from "react";

const ListPokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  if (pokemons.length === 0) {
    fetch("https://pokebuildapi.fr/api/v1/pokemon")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemons(data);
      });
  }

  return (
    <main>
      {pokemons.length > 0 ? (
        <>
          {pokemons.map((pokemon) => {
            return (
              <article>
                <p>{pokemon.name}</p>
              </article>
            );
          })}
        </>
      ) : (
        <p>En attente de récupération des données</p>
      )}
    </main>
  );
};

export default ListPokemons;
