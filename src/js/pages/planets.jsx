import React, { useEffect, useState } from "react";
import useFlux from "../flux/flux";
import { Link } from "react-router"; // Asegúrate de importar desde react-router-dom

function Planets() {
  const { store, actions } = useFlux();
  const { dataPlanets } = store;
  const [selectedPlanet, setSelectedPlanet] = useState(null); // Estado para el planeta seleccionado

  useEffect(() => {
    actions.getPlanets();
  }, []);

  console.log(dataPlanets);

  return (
    <div className="container-fluid text-light align-self-center">
      <div className="row">
        {/* Columna izquierda: Lista de planetas */}
        <div className="col-md-6" style={{ overflowY: "auto", height: "100vh" }}>
          <div className="text-center bs-light-bg-subtle m-5">
            <div>
              <h1>Planetas:</h1>
            </div>

            <div className="text-secondary-emphasis">
              {dataPlanets &&
                dataPlanets.results.map((planet, index) => {
                  return (
                    <div
                      key={index}
                      className="card mb-3"
                      style={{ width: "18rem", cursor: "pointer" }}
                      onClick={() => setSelectedPlanet(planet)} // Selecciona el planeta al hacer clic
                    >
                      <div className="card-body">
                        <h5 className="card-title text-bg-secondary">
                          {planet.name}
                        </h5>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        {/* Columna derecha: Detalles del planeta seleccionado */}
        <div
          className="col-md-6 position-fixed end-0"
          style={{ width: "50%", height: "100vh", overflowY: "auto" }}
        >
          <div className="text-center bs-light-bg-subtle m-5">
            <h1>Detalles del Planeta</h1>
            {selectedPlanet ? (
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title text-bg-secondary">
                    {selectedPlanet.name}
                  </h5>
                  <p>
                    Population:{" "}
                    <span className="text-danger-emphasis">
                      {selectedPlanet.population}
                    </span>
                  </p>
                  <p>Climate: {selectedPlanet.climate}</p>
                  <p>Orbital Period: {selectedPlanet.orbital_period}</p>
                  <p>Rotation Period: {selectedPlanet.rotation_period}</p>
                  <p>Diameter: {selectedPlanet.diameter}</p>
                </div>
              </div>
            ) : (
              <p>Selecciona un planeta para ver sus detalles.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Planets;