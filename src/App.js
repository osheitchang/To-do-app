import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import createTodos from "./components/Create-todos"
function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <h2>To do App</h2>
        </div>
        {/* <Route path="/" exact component={TodosList} />
        <Route path="edit/:id" exact component={EditTodo} />
        <Route path="/create" exact component={CreateTodo} /> */}
      </Router>
    </div>
  );
}

export default App;



