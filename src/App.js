import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import Search from './Components/Search/Search';
import SearchResult from './Components/SearchResult/SearchResult';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/SignUp">
          <SignUp/>
        </Route>
        <Route path="/Login">
          <Login/>
        </Route>
        <Route path="/Search">
          <Search/>
        </Route>
        <Route path="/SearchResult">
          <SearchResult/>
        </Route>
      </Switch>
    
  </Router>
  );
}

export default App;
