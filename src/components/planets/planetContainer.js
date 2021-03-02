import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPlanet } from "../../redux/planets/planetsAction";
import Planets from "./planets";

function PlanetContainer({ planetData, loadingData, fetchPlanet }) {
  useEffect(() => {
    fetchPlanet();
  }, [fetchPlanet]);
  return (
    <div className="wrapper">
      <Planets planetData={planetData} loading={loadingData} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    planetData: state.planetResults,
    loadingData: state.planetResults.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlanet: () => dispatch(fetchPlanet()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanetContainer);
