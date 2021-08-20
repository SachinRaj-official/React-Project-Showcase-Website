import React from "react";
import "./App.css";
import Nav from "./Pages/Navigation/Nav";
import Todo from "./Pages/Todo/Todo";
import Weather from "./Pages/weather/Weather";
import Home from "./Pages/Home/Home";
import Error from "./Pages/Error/Error";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/todo" component={Todo} />
          <Route path="/weather" component={Weather} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
