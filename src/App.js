import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import CreateTodos from "./components/Create-todos";
import EditTodos from "./components/Edit-todos";
import ListTodos from "./components/List-todos";
import Logo from "./images/rocketLogo.png"

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className ="navbar-brand" href="" target="_blank">
            <img src={Logo}  width="" height="" alt="Company logo" id="navbar-logo" />
          </a>
          <Link to="/" className="navbar-brand">Mern Stack Todo App</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
              <Link to="/" className="nav-link"> Todos</Link>
              </li>
              <li className="navbar-item">
              <Link to="/create" className="nav-link"> Create Todos</Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* <h2>To do App</h2> */}
        <Route path="/" exact component={ListTodos} />
        <Route path="/edit/:id" exact component={EditTodos} />
        <Route path="/create" exact component={CreateTodos} />
      </div>
    </Router>
  );
}

export default App;
