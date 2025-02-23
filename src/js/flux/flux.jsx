import { useState } from "react";

const useFlux = () => {
  const [store, setStore] = useState({
   dataPlanets: ["Casa",'perro'], 
   dataCharacters:null,
  });

  const actions = {
   
    getCharacters: async () => {
      try {
        const response = await fetch(
          "https://swapi.dev/api/people/",
        );
        if (!response.ok) {
          throw new Error("Error al obtener los datos de personajes");
        }
        const data = await response.json();
        setStore((prevStore) => ({
          ...prevStore,
          dataCharacters: data, // Actualiza el estado con los datos
        }));
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    },
   
  };

  return { store, actions };
};

export default useFlux;
