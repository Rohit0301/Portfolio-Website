import React from 'react';
import classes from './Header.module.css';
import back from './background.jpg';

import 'bootstrap/dist/css/bootstrap.css';
import { Button,row,col } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';

const Header = () =>{
    return(
     
         <div className={classes.row}>
             <div className={classes.sidebar}>
             
                <div className={classes.title}>
             
                
                         
                    <div>
                      <div className={classes.myImage}>

                      </div>
                      <span>Rohit Jain</span>
                    </div>
                    <br></br>
                    <br></br>
                    <a href="#" >Home</a>    
                    <a href="#" >About me</a>
                   
                    <a href="#" >What I do</a>
                    
                    <a href="#" >Resume</a>
                     
                    <a href="#" >Connect</a>
                  
                 </div>
              </div>
              <div className={classes.Img}>
                  <img src={back}/>
                  <div className={classes.text}>
                        <h4>Welcome</h4>
                        <h1>I'm Rohit Jain</h1>
                        <h5>Web developer/Competitive Programmer</h5>
                  </div>
              </div>

           </div>
        
    
      
    );
}

export default Header;