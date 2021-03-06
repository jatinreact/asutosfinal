import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />

        {/*User Pages */}
        <Route exact path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
