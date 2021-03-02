import React from "react";
import Spinner from "../partials/spinner/spinner";
import "./people.scss";
function PeopleList({ peopleData }) {
  return peopleData.loading ? (
    <Spinner />
  ) : peopleData.error ? (
    <div className="error__">
      <h2>{peopleData.error}</h2>
    </div>
  ) : (
    <div className="grid">
      {peopleData.results.map((data, index) => {
        return (
          <div className="card" key={data.name}>
            <div className="d-flex justify-content-center">
              {peopleData.images[index]}
            </div>
            <div className="mt-auto card__profile">
              <p>
                {data.name} <span>{data.birth_year}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PeopleList;
