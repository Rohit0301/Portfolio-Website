import React from 'react';
import classes from './Sidebar.module.css';
import edu from './Education';
import 'bootstrap/dist/css/bootstrap.css';
import { Button,row,col } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';
import Img from './assets/myImageS.jpeg';

const scrollHome = () =>{
    window.scrollTo({
       top:0,
        behavior:'smooth'
    });
};

const scrollEducation = () =>{
    window.scrollTo({
        top:1500,
        left:0,
        behavior:'smooth'
    });
};

const scrollAbout = () =>{
    window.scrollTo({
        top:500,
        left:0,
        behavior:'smooth'
    });
};

const scrollCompetence = () =>{
    window.scrollTo({
        top:900,
        left:0,
        behavior:'smooth'
    });
};
const Sidebar = () =>{
    return(
     
         
         
    
       
                <div className={classes.title}>    
                <br></br>
                   <div className={classes.myImage}>
                   
                      
                 </div>
                 <span>Rohit Jain</span>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <a className={classes.link} onClick={scrollHome} >Home</a>    
                    <a className={classes.link} onClick={scrollAbout} >About me</a>
                   
                    <a className={classes.link} onClick={scrollCompetence} >Competence</a>
                    
                    <a className={classes.link} onClick={scrollEducation} >Education</a>
                     
                    <a className={classes.link} href="#" >Connect</a>
                  
                </div>
              
       
            
          
        
    
      
    );
}

export default Sidebar;