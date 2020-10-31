import React from "react";
import About from "./About";
import classes from './App.module.css';
import Header from './Header';
import Services from './Services';

function App() {
  return (
    <div className={classes.App} >
      <Header/>
      <About/>
      <Services/>
    </div>
  );
}

export default App;
