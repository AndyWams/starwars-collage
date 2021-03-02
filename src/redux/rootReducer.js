import { combineReducers } from "redux";
import peopleReducer from "./people/peopleReducers";
import planetReducer from "./planets/planetsReducers";

const rootReducer = combineReducers({
  peopleResults: peopleReducer,
  planetResults: planetReducer,
});

export default rootReducer;
