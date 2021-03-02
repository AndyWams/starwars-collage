import {
  FETCH_PLANETS_REQUEST,
  FETCH_PLANETS_SUCCESS,
  FETCH_PLANETS_FAILURE,
} from "./planetTypes";

const initialState = {
  loading: true,
  results: [],
  error: "",
};

const planetReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLANETS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PLANETS_SUCCESS:
      return {
        loading: false,
        results: action.payload,
        error: "",
      };
    case FETCH_PLANETS_FAILURE:
      return {
        loading: false,
        results: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default planetReducer;
