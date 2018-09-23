import React, { Component } from 'react';
import { Switch, Link, Route, BrowserRouter } from 'react-router-dom'
import TodosPage from './pages/TodosPage/TodosPage'
import logo from './logo.svg';
import './App.css';
import TodoEdit from './pages/TodoEdit/TodoEdit'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Link to="/todos">Todos</Link>|
          <Link to="/edit">add</Link>
          <Switch>
            <Route path="/todos" component={TodosPage}></Route>
            <Route path="/edit/:id?" component={TodoEdit}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
