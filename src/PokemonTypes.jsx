import { useEffect, useState } from "react";

const PokemonTypes = () => {
  const [types, setTypes] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://pokebuildapi.fr/api/v1/types")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTypes(data);
      })
      .finally(() => {
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  if (isLoading) {
    return <p>Types en cours de chargement</p>;
  }

  if (isError) {
    return <p>Il y a eu une erreur de chargement. Veuillez rafraichir la page</p>;
  }

  return (
    <section>
      {types.map((type) => {
        return (
          <article>
            <p>{type.name}</p>
            <img src={type.image} alt={type.name} />
          </article>
        );
      })}
    </section>
  );
};

export default PokemonTypes;
