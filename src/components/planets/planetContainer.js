import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPlanet } from "../../redux/planets/planetsAction";
import Planets from "./planets";

function PlanetContainer() {
  const planetData = useSelector((state) => state.planetResults);
  const loadingData = useSelector((state) => state.planetResults.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlanet());
  }, [dispatch]);
  return (
    <div className="wrapper">
      <Planets planetData={planetData} loading={loadingData} />
    </div>
  );
}

export default PlanetContainer;
