import React from "react";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from './component/pages/Home';
import Services from './component/pages/Services';
import Products from './component/pages/Product';
import SignUp from './component/pages/SignUp';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/services" componnet={Services}/>
          <Route path="/products" componnet={Products}/>
          <Route path="/sign-up" componnet={SignUp}/>
        </Switch>
      </Router>
    </>  
  );
}

export default App;
