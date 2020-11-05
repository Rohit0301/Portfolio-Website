import React from 'react';
import classes from './Header.module.css';
import back from './assets/background.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import Grid from '@material-ui/core/Grid';
import {Section} from 'react-scroll-section';

const Header = () =>{
    return(
     
        <Section id="home">
              <Grid className={classes.Img}>
                 <Grid item xs={12} sm={12}> 
                 <img src={back}/>
                  <Grid alignItems="center" justify="center" className={classes.text}>
                        <h3>Welcome</h3>
                        <h1>I'm Rohit Jain</h1>
                        <h5>Web developer/Competitive Programmer</h5>
                        <h5>1759 ratings on codechef</h5>
                  </Grid>
                  </Grid>
              </Grid>
              </Section>
   
    
      
    );
}

export default Header;