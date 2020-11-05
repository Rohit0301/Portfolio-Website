import React from "react";
import About from "./About";
import classes from './App.module.css';
import Header from './Header';
import Grid from '@material-ui/core/Grid';

import Services from './Services';
import Sidebar from "./Sidebar";
import Education from "./Education";
import Project from './Project';
import Connect from './Connect';
import { Link, animateScroll as scroll } from "react-scroll";
import {  
  Section
} from 'react-scroll-section';

function App() {
  return (
   
      <Grid container justify="flex-start">
        <Grid xs={3} sm={1} >
      <Sidebar/>             
      </Grid>
      <Grid item xs={9} sm={11} >
    <Header/>
      <About/>
      <hr></hr>
      <Services/> 
      <hr></hr>
      <Education/>
      <hr></hr>
     
      <Project/>
   
      <hr></hr>
      <Connect/>
      </Grid>
  </Grid>
    
  );
}

export default App;
