import React from 'react';
import './App.css';
import About from './Components/pages/About';
import Home from './Components/pages/Home';
import Topics from './Components/pages/Topics';
import Blogs from './Components/pages/Blogs';
import GeneralAwareness from './Components/pages/GeneralAwareness'
import {Route, Switch} from 'react-router-dom';
import NavbarTop from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossorigin="anonymous"
      />
      <NavbarTop />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/Topics" component={Topics}></Route>
        <Route exact path="/Blogs" component={Blogs}></Route>
        <Route exact path="/About" component={About}></Route>
        <Route exact path="/GeneralAwareness" component={GeneralAwareness}></Route>
      </Switch>
      
    </div>
  );
}

export default App;
