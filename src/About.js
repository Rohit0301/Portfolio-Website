import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import classes from './About.module.css';
import { Section } from 'react-scroll-section';
const About = () =>{
    return (
     <Section id="about">
        <div className={classes.head}>
    <h1>ABOUT ME</h1>

    </div>
    <br></br>
    <Grid container spacing={2}>
      
      <Grid item xs={12} sm={12}>
    
        <div className={classes.text}>
        <h3>I'm <b>Rohit Jain</b>, a Web Developer and a Competitive Programmer.</h3>
                 <h4> Competitive Programming Lead at DSC OIST,Bhopal | 
                 Demonstrated working knowledge of Object-Oriented Design/Analysis and web development | 
                 Develop and debug source code | Great understanding of Data Structures and Algorithms |
                 deep logic building and problem solving skills | sufficient knowledge about OS and DBMS concept | 1759 rated coder on codechef | had cleared 
                 1st round of TCS codevita and Facebook Hacker Cup</h4>

             </div>
            
              
      </Grid>
      {/* <Grid item xs={4} sm={4}>
          <div className={classes.bio}>
         <p> <h5><b>Name :</b></h5>Rohit Jain</p>
         <p> <h5><b>Place :</b> </h5><span>Nepanagar</span></p>
         <p> <h5> <b>Age :</b></h5> 19</p>
          </div>
      </Grid> */}
     </Grid>
     </Section>

   
    );
}

export default About;