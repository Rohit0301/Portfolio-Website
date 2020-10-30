import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import classes from './Header.module.css';
import back from './background.jpg';
import { Button,row,col } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';

const Header = () =>{
    return(
     
         <div className={classes.row}>
             <div className={classes.sidebar}>
             
                <div className={classes.title}>
                  <span className={classes.titles}>    
                
                         
                    <div>
                      <div className={classes.myImage}>

                      </div>
                      <span>Rohit Jain</span>
                    </div>
                    <br></br>
                    <br></br>
                    <a href="" className={classes.titles}>Home</a>
                    </span>
                    <span className={classes.titles}>    
                    <a href="" className={classes.titles}>About me</a>
                    </span>
                    <span className={classes.titles}>    
                    <a href="" className={classes.titles}>What I do</a>
                    </span >
                    <span className={classes.titles}>    
                    <a href="" className={classes.titles}>Resume</a>
                    </span>
                    <span className={classes.titles}>    
                    <a href="" className={classes.titles}>Connect</a>
                    </span>
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