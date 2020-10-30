import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import classes from './About.module.css';
const About = () =>{
    return (
        <div>
    <div className={classes.head}>
    <h1>ABOUT ME</h1>
    <h3>Kno<span>w Me M</span>ore</h3>
    </div>
    <br></br>
    <Grid container spacing={3}>
        <Grid item xs={1}>

        </Grid>
      <Grid item xs={8}>
        <Grid container>
        <p className={classes.text}>
                 <span>I'm <b>Rohit Jain</b>, a Web Developer and Competitive Programmer. </span>
                  Competitive Programming Lead at DSC OIST,Bhopal.
                 Demonstrated working knowledge of Object-Oriented Design/Analysis and web development.
                 Develop and debug source code,Great understanding of Data Structures and Algorithms, 
                 deep logic building and problem solving skills,sufficient knowledge about OS and DBMS concept.
             </p>
        </Grid>
      </Grid>
      <Grid item xs={3}>
          <div className={classes.bio}>
         <p> <b>Name :</b> Rohit Jain</p>
         <p> <b>Place :</b> <span>Nepanagar</span></p>
         <p>  <b>Age :</b> 19</p>
          </div>
      </Grid>
     </Grid>
    
        <div classes="row">
           <div classes="col-md-7 col-7 alert alert-primary">
            
           </div>
           <div classes="col-md-4 col-4">
               
           </div>
        </div>
    
    </div>
    );
}

export default About;