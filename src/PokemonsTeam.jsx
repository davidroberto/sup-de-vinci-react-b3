import { useEffect, useState } from "react";

const PokemonsTeam = () => {
  const [pokemonsInTeam, setPokemonsInTeam] = useState([]);

  const fetchPokemonsTeam = () => {
    fetch("https://pokebuildapi.fr/api/v1/random/team")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemonsInTeam(data);
      });
  };

  // useEffect permet d'executer du code à certains moments du cycle de vie du composant
  useEffect(() => {
    fetchPokemonsTeam();
  }, []);

  const handleRecreateTeam = () => {
    fetchPokemonsTeam();
  };

  return (
    <section>
      <button onClick={handleRecreateTeam}>Créer une nouvelle team</button>
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
        </>
      ) : (
        <p>Team en cours d'assemblage !</p>
      )}
    </section>
  );
};

export default PokemonsTeam;
