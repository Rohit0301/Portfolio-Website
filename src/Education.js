import React from 'react';
import Grid from '@material-ui/core/Grid';
import classes from './Education.module.css';
import { Section } from 'react-scroll-section';
const Education = () =>{
    return (
        <Section id="education">
        <div className={classes.head}>
        <h1>Education</h1>
        </div>
        <br></br>
        <Grid container className={classes.card}>
           
            <Grid item>
            <div className={classes.Img}>

            </div>
            </Grid>
     
           <Grid item xs={10} sm={10}>
               <h1>Oriental Institute of Science and Technology, Bhopal</h1>
               <h3>2nd Year , Computer Science</h3>
               <h3>Currently Studying.</h3>
            </Grid>
         
       </Grid>
       <Grid container className={classes.card}>
           
            <Grid item>
            <div className={classes.Img1}>

            </div>
            </Grid>
     
           <Grid item xs={10} sm={10}>
               <h1>Kendriya Vidyalaya Nepanagar</h1>
               <h3>12th Class , PCM,IP,English</h3>
               <h3>Percentage : 91.4%</h3>
            </Grid>
         
       </Grid>
       <Grid container  className={classes.card}>
           
            <Grid item>
            <div className={classes.Img1}>

            </div>
            </Grid>
     
           <Grid item xs={10} sm={10}>
               <h1>Kendriya Vidyalaya Nepanagar</h1>
               <h3>10th Class</h3>
               <h3>CGPA : 10 CGPA</h3>
            </Grid>
         
       </Grid>
       </Section>
   
    );
}

export default Education;