import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import PeopleContainer from "./components/people/peopleContainer";
import store from "./redux/store";
import { Provider } from "react-redux";
import Header from "./components/header/header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PlanetContainer from "./components/planets/planetContainer";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App container">
          <Header />
          <Route path="/" exact render={() => <PeopleContainer />} />
          <Route path="/planets" exact render={() => <PlanetContainer />} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
