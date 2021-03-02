import React from "react";
import avatar1 from "../../assets/images/avatar1.svg";
import avatar2 from "../../assets/images/avatar2.svg";
import avatar3 from "../../assets/images/avatar3.svg";
import avatar4 from "../../assets/images/avatar4.svg";
import Spinner from "../partials/spinner/spinner";
import "./people.scss";
function PeopleList({ loading, peopleData }) {
  const images = [];
  images[0] = <img src={avatar1} alt="img one" style={{ height: "250px" }} />;
  images[1] = <img src={avatar2} alt="img two" style={{ height: "250px" }} />;
  images[2] = <img src={avatar3} alt="img three" style={{ height: "250px" }} />;
  images[3] = <img src={avatar4} alt="img four" style={{ height: "250px" }} />;
  images[4] = <img src={avatar1} alt="img one" style={{ height: "250px" }} />;
  images[5] = <img src={avatar2} alt="img two" style={{ height: "250px" }} />;
  images[6] = <img src={avatar3} alt="img three" style={{ height: "250px" }} />;
  images[7] = <img src={avatar4} alt="img four" style={{ height: "250px" }} />;
  images[8] = <img src={avatar2} alt="img two" style={{ height: "250px" }} />;
  images[9] = <img src={avatar3} alt="img three" style={{ height: "250px" }} />;
  return loading ? (
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
            <div className="d-flex justify-content-center">{images[index]}</div>
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
