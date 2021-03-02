import React from "react";
import Spinner from "../partials/spinner/spinner";
import "../people/people.scss";
function Planets({ loading, planetData }) {
  return loading ? (
    <Spinner />
  ) : planetData.error ? (
    <div className="error__">
      <h2>{planetData.error}</h2>
    </div>
  ) : (
    <div className="grid">
      {planetData.results.map((data) => {
        return (
          <div className="card h__400" key={data.name}>
            <div className="title__header">
              <h2>
                {data.name} <span>{data.birth_year}</span>
              </h2>
            </div>
            <div className="mt-auto description">
              <div className="item">
                <label>Gravity</label>
                <p>{data.gravity}</p>
              </div>
              <div className="item">
                <label>Terrain</label>
                <p>{data.terrain}</p>
              </div>
              <div className="item">
                <label>Population</label>
                <p>{data.population}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Planets;
