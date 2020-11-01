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
                        <h3>Welcome</h3>
                        <h1>I'm Rohit Jain</h1>
                        <h5>Web developer/Competitive Programmer</h5>
                        <h5>1759 ratings on codechef</h5>
                  </div>
              </div>

   
    
      
    );
}

export default Header;