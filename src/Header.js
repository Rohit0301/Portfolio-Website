import React from 'react';
import classes from './Header.module.css';
import back from './assets/background.jpg';

import 'bootstrap/dist/css/bootstrap.css';
import { Button,row,col } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';

const Header = () =>{
    return(
     
        
              <div className={classes.Img}>
                  <img src={back}/>
                  <div className={classes.text}>
                        <h4>Welcome</h4>
                        <h1>I'm Rohit Jain</h1>
                        <h5>Web developer/Competitive Programmer</h5>
                  </div>
              </div>

   
    
      
    );
}

export default Header;