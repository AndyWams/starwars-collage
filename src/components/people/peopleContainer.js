import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPeople } from "../../redux";
import PeopleList from "./peopleList";

function PeopleContainer({ peopleData, loadingData, fetchPeople }) {
  useEffect(() => {
    fetchPeople();
  }, [fetchPeople]);
  return (
    <div className="wrapper">
      <PeopleList peopleData={peopleData} loading={loadingData} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    peopleData: state.peopleResults,
    loadingData: state.peopleResults.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPeople: () => dispatch(fetchPeople()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer);
