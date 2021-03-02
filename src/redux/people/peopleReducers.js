import {
  FETCH_PEOPLE_REQUEST,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_FAILURE,
} from "./peopleTypes";
import avatar1 from "../../assets/images/avatar1.svg";
import avatar2 from "../../assets/images/avatar2.svg";
import avatar3 from "../../assets/images/avatar3.svg";
import avatar4 from "../../assets/images/avatar4.svg";
const initialState = {
  loading: true,
  results: [],
  error: "",
  images: [
    <img src={avatar1} alt="img one" style={{ height: "250px" }} key={0} />,
    <img src={avatar2} alt="img two" style={{ height: "250px" }} key={1} />,
    <img src={avatar3} alt="img three" style={{ height: "250px" }} key={2} />,
    <img src={avatar1} alt="img one" style={{ height: "250px" }} key={3} />,
    <img src={avatar2} alt="img two" style={{ height: "250px" }} key={4} />,
    <img src={avatar3} alt="img three" style={{ height: "250px" }} key={5} />,
    <img src={avatar4} alt="img four" style={{ height: "250px" }} key={6} />,
    <img src={avatar2} alt="img two" style={{ height: "250px" }} key={7} />,
    <img src={avatar3} alt="img three" style={{ height: "250px" }} key={8} />,
    <img src={avatar1} alt="img one" style={{ height: "250px" }} key={9} />,
  ],
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PEOPLE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.payload,
        error: "",
      };
    case FETCH_PEOPLE_FAILURE:
      return {
        loading: false,
        results: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default peopleReducer;
