import React from "react";
import About from "./About";
import classes from './App.module.css';
import Header from './Header';

function App() {
  return (
    <div className={classes.App} >
      <Header/>
      <About/>
    </div>
  );
}

export default App;
