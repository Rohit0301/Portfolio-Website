import React from 'react';
import classes from './Sidebar.module.css';
import edu from './Education';
import 'bootstrap/dist/css/bootstrap.css';
import { Button,row,col } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';
import Img from './assets/myImageS.jpeg';

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
                    <a href="#" >Home</a>    
                    <a href="#" >About me</a>
                   
                    <a href="#" >Competence</a>
                    
                    <a href="#" >Education</a>
                     
                    <a href="#" >Connect</a>
                  
                </div>
              
       
            
          
        
    
      
    );
}

export default Sidebar;