import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import classes from './Services.module.css';
import LinearProgress from '@material-ui/core/LinearProgress';
import {  withStyles } from '@material-ui/core/styles';
import { Section } from 'react-scroll-section';
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    width:'auto',
    margin:5,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

const About = () =>{
    return (
      <Section id="competence">
    <div className={classes.head}>
    <h1>Competence</h1>
  
    </div>
    <br></br>
    <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item xs={12} sm={4}>
      <h3>JAVA</h3>
        <BorderLinearProgress variant="determinate" value={93} />
        </Grid>
        <Grid item xs={12} sm={4}>
      <h3>FLASK</h3>
        <BorderLinearProgress variant="determinate" value={68} />
        </Grid>
        <Grid item xs={12} sm={4}>
      <h3>MYSQL</h3>
        <BorderLinearProgress variant="determinate" value={87} />
        </Grid>
    </Grid>

    <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item xs={12} sm={4}>
      <h3>HTML5</h3>
        <BorderLinearProgress variant="determinate" value={89} />
        </Grid>
        <Grid item xs={12} sm={4}>
      <h3>CSS3</h3>
        <BorderLinearProgress variant="determinate" value={72} />
        </Grid>
        <Grid item xs={12} sm={4}>
      <h3>BOOTSTRAP4</h3>
        <BorderLinearProgress variant="determinate" value={81} />
        </Grid>
    </Grid>

    <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item xs={12} sm={4}>
      <h3>JAVASCRIPT</h3>
        <BorderLinearProgress variant="determinate" value={59} />
        </Grid>
        <Grid item xs={12} sm={4}>
      <h3>REACT</h3>
        <BorderLinearProgress variant="determinate" value={48} />
        </Grid>
        <Grid item xs={12} sm={4}>
      <h3>MATERIAL-UI</h3>
        <BorderLinearProgress variant="determinate" value={64} />
        </Grid>
    </Grid>

    <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item xs={12} sm={4}>
      <h3>DATA STRUCTURE</h3>
        <BorderLinearProgress variant="determinate" value={89} />
        </Grid>
        <Grid item xs={12} sm={4}>
      <h3>ALGORITHMS</h3>
        <BorderLinearProgress variant="determinate" value={85} />
        </Grid>
        <Grid item xs={12} sm={4}>
      <h3>GITHUB</h3>
        <BorderLinearProgress variant="determinate" value={80} />
        </Grid>
    </Grid>
    
    </Section>
        
    );
}


export default About;