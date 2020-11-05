import React, { useRef } from 'react';
import classes from './Sidebar.module.css';
import edu from './Education';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, animateScroll as scroll } from "react-scroll";
import { Button,row,col } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';
import Img from './assets/myImageS.jpeg';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import { scroller } from "react-scroll";

const Sidebar = () =>{
 
    return(
            <Grid container xs={3} sm={1} justify="center" className={classes.title}>                
            <div>    
                <br></br>
                 <center>  <div className={classes.myImage}>
                   
                      
                 </div></center>
                <Grid item xs={12} sm={12}> <span><b>Rohit Jain</b></span></Grid>
                    <br></br>
                    <br></br>
                    <br></br>
               
        
                    <Grid  item xs={12} sm={12}><Link className={classes.link} to="home" smooth={true} duration={1000}>Home</Link>    </Grid>
                    <Grid item xs={12} sm={12}><Link className={classes.link} to="about" smooth={true} duration={1000} >About me</Link></Grid>
                   
                    <Grid item xs={12} sm={12}><Link className={classes.link} to="competence" smooth={true} duration={1000}>Competence</Link></Grid>
                    
                    <Grid item xs={12} sm={12}><Link className={classes.link} to="education" smooth={true} duration={1000} >Education</Link></Grid>
                    <Grid item xs={12} sm={12}><Link className={classes.link} to="project" smooth={true} duration={1000}>Project</Link></Grid>
                    <Grid item xs={12} sm={12}><Link className={classes.link} to="connect" smooth={true} duration={1000}>Connect</Link></Grid>
                
                  
                </div>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            <ul> 
             <li>  <LinkedInIcon style={{fontSize:30}}  onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.linkedin.com/in/rohitjain0301/';
      }}/></li>
      <li> <GitHubIcon  style={{fontSize:30}} onClick={(e) => {
      e.preventDefault();
      window.location.href='https://github.com/Rohit0301';
      }}/></li>
        <li> <InstagramIcon  style={{fontSize:30}} onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.instagram.com/_r.o.h.i.t_j.a.i.n/';
      }}/></li>
       <li><FacebookIcon  style={{fontSize:30}} onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.facebook.com/profile.php?id=100011138533561';
      }}/></li>
    
    </ul>          
              
                </Grid>

            
          
        
    
      
    );
}

export default Sidebar;