import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPeople } from "../../redux";
import PeopleList from "./peopleList";

function PeopleContainer({ peopleData, getPeople }) {
  useEffect(() => {
    getPeople();
  }, [getPeople]);
  return (
    <div className="wrapper">
      <PeopleList peopleData={peopleData} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    peopleData: state.peopleResults,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPeople: () => dispatch(fetchPeople()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer);
