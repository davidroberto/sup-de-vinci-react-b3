import { useState } from "react";

const PokemonsTeam = () => {
  const [pokemonsInTeam, setPokemonsInTeam] = useState([]);

  if (pokemonsInTeam.length === 0) {
    fetch("https://pokebuildapi.fr/api/v1/random/team")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemonsInTeam(data);
      });
  }

  const handleRecreateTeam = () => {
    fetch("https://pokebuildapi.fr/api/v1/random/team")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemonsInTeam(data);
      });
  };

  return (
    <section>
      {pokemonsInTeam.length > 0 ? (
        <>
          {pokemonsInTeam.map((pokemon) => {
            return (
              <article>
                <p>{pokemon.name}</p>
                <img src={pokemon.image} />
              </article>
            );
          })}
          <button onClick={handleRecreateTeam}>Créer une nouvelle team</button>
        </>
      ) : (
        <p>Team en cours d'assemblage !</p>
      )}
    </section>
  );
};

export default PokemonsTeam;
