import {
  FETCH_PEOPLE_REQUEST,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_FAILURE,
} from "./peopleTypes";

import axios from "axios";

export const fetchPeopleRequest = () => {
  return {
    type: FETCH_PEOPLE_REQUEST,
  };
};

export const fetchPeopleSuccess = (people) => {
  return {
    type: FETCH_PEOPLE_SUCCESS,
    payload: people,
  };
};

export const fetchPeopleFailure = (error) => {
  return {
    type: FETCH_PEOPLE_FAILURE,
    payload: error,
  };
};

export const fetchPeople = () => {
  return (dispatch) => {
    dispatch(fetchPeopleRequest);
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        const people = response.data.results;
        dispatch(fetchPeopleSuccess(people));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchPeopleFailure(errorMsg));
      });
  };
};
