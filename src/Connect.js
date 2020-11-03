import React, { Component } from 'react';
import classes from './Connect.module.css';
import Grid from '@material-ui/core/Grid'; 
import FeedbackForm from './Feedback';
import PropTypes from 'prop-types';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
class Connect extends Component{
    render(){
    return(
        <div>
        <div className={classes.head}>
         <h1>CONNECT</h1>
        </div>
        <Grid container justify="center" spacing={3}>
          <Grid item xs={12} sm={3}>
        <h2>Address</h2><br></br>
        <h5>H/n 209 Suraksha colony,<br></br> Budhwara Market,<br></br> Nepanagar, [M.P], 450221</h5>
        <br></br>
        <Grid container spacing={2}>
       <Grid item xs={2} sm={2}><CallIcon color="secondary" style={{fontSize:30}}/></Grid><Grid xs={10} sm={8}><h4>9479609031</h4></Grid>
        <Grid item xs={2} sm={2}><EmailIcon color="secondary" style={{fontSize:30}}/></Grid><Grid xs={10} sm={9}><h4>rj03012002@gmail.com</h4></Grid>

        <Grid item xs={2} xs={2}><LinkedInIcon color="primary" style={{fontSize:40, marginRight:5}}  onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.linkedin.com/in/rohitjain0301/';
      }}/></Grid>
        <Grid item xs={2} xs={2}> <GitHubIcon style={{fontSize:40, marginRight:5}} onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.facebook.com/profile.php?id=100011138533561';
      }}/></Grid>
        <Grid item xs={2} xs={2}> <InstagramIcon style={{fontSize:40, marginRight:5,color:"deeppink"}} onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.instagram.com/_r.o.h.i.t_j.a.i.n/';
      }}/></Grid>
        <Grid item xs={2} xs={2}><FacebookIcon color="primary" style={{fontSize:40, marginRight:5}} onClick={(e) => {
      e.preventDefault();
      window.location.href='';
      }}/></Grid>
       </Grid>

          </Grid>
        
          <Grid item xs={12} sm={6}>
          <h2>Comment</h2>
          <br></br>
          <FeedbackForm />
          </Grid>
        </Grid>

        </div>
    );
    }
}

Connect.propTypes = {
    env: PropTypes.object.isRequired
  };
export default Connect;