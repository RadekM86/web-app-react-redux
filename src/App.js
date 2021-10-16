import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import PokemonPage from "./pages/PokemonPage";
import Form from './components/Form';
import UsersPage from "./pages/UsersPage";
import Navigation from "./components/Navigation";
import ErrorPage from "./pages/ErrorPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  const loggedIn = true;
  return (
    <React.Fragment>
      <Router>
        <div className="App">
          <div name="3" className="header">
            Hello
          </div>
          <Navigation />
          <Switch>
            <Route exact path="/">
              {loggedIn ? <Redirect to="/users" /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/login" component={Form} />
            <Route exact path="/users" component={UsersPage} />
            <Route exact path="/pokemon" component={PokemonPage} />
            <Route exact path="/products" component={ProductsPage} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
