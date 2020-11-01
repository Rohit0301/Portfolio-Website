import React from "react";
import About from "./About";
import classes from './App.module.css';
import Header from './Header';
import Grid from '@material-ui/core/Grid';

import Services from './Services';
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className={classes.App} >
      <Grid container >
        <Grid item xs={3} sm={1}>
      <Sidebar/>
      </Grid>
      <Grid item xs={9} sm={11}>
      <Header/>
      <About/>
      <Services/> 
      </Grid>
      </Grid>
      {/* 
      */}
    </div>
  );
}

export default App;
