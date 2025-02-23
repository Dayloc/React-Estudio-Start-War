import React, { useEffect, useState } from 'react';
import useFlux from '../flux/flux';
import { Link } from 'react-router'; // Asegúrate de importar desde react-router-dom

function Characters() {
  const { store, actions } = useFlux();
  const { dataCharacters } = store;
  const [selectedCharacter, setSelectedCharacter] = useState(null); // Estado para el personaje seleccionado

  useEffect(() => {
    actions.getCharacters();
  }, []);

  console.log(dataCharacters);

  return (
    <div className="container-fluid text-light align-self-center">
      <div className="row">
        {/* Columna izquierda: Lista de personajes */}
        <div className="col-md-6" style={{ overflowY: "auto", height: "100vh" }}>
          <div className="text-center bs-light-bg-subtle m-5">
            <div>
              <Link to="/">Home</Link>
            </div>
            <h1>Characters</h1>
            <div className="d-flex flex-column gap-3"> {/* Lista vertical de tarjetas */}
              {dataCharacters &&
                dataCharacters.results.map((item, index) => (
                  <div
                    key={index}
                    className="card"
                    style={{ cursor: "pointer" }}
                    onClick={() => setSelectedCharacter(item)} // Selecciona el personaje al hacer clic
                  >
                    <div className="card-body">
                      <h5 className="card-title text-bg-secondary">
                        {item.name}
                      </h5>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Columna derecha: Detalles del personaje seleccionado */}
        <div
          className="col-md-6 position-fixed end-0"
          style={{ width: "50%", height: "100vh", overflowY: "auto" }}
        >
          <div className="text-center bs-light-bg-subtle m-5">
            <h1>Detalles del Personaje</h1>
            {selectedCharacter ? (
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title text-bg-secondary">
                    {selectedCharacter.name}
                  </h5>
                  <p>Género: {selectedCharacter.gender}</p>
                  <p>Altura: {selectedCharacter.height}</p>
                  <p>Peso: {selectedCharacter.mass}</p>
                  <p>Color de pelo: {selectedCharacter.hair_color}</p>
                  <p>Color de piel: {selectedCharacter.skin_color}</p>
                  <p>Color de ojos: {selectedCharacter.eye_color}</p>
                  <p>Año de nacimiento: {selectedCharacter.birth_year}</p>
                </div>
              </div>
            ) : (
              <p>Selecciona un personaje para ver sus detalles.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Characters;