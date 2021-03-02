import {
  FETCH_PLANETS_REQUEST,
  FETCH_PLANETS_SUCCESS,
  FETCH_PLANETS_FAILURE,
} from "./planetTypes";

import axios from "axios";
//Action Creators without side effects (pure functions)
export const fetchPlanetsRequest = () => {
  return {
    type: FETCH_PLANETS_REQUEST,
  };
};

export const fetchPlanetSuccess = (people) => {
  return {
    type: FETCH_PLANETS_SUCCESS,
    payload: people,
  };
};

export const fetchPlanetsFailure = (error) => {
  return {
    type: FETCH_PLANETS_FAILURE,
    payload: error,
  };
};

//Action Creator with side effects
export const fetchPlanet = () => {
  return (dispatch) => {
    dispatch(fetchPlanetsRequest);
    axios
      .get("https://swapi.dev/api/planets/")
      .then((response) => {
        const planets = response.data.results;
        dispatch(fetchPlanetSuccess(planets));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchPlanetsFailure(errorMsg));
      });
  };
};
