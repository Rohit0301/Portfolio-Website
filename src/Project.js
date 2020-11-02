import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { grey } from '@material-ui/core/colors';
import classes from './Project.module.css';
import Button from '@material-ui/core/Button';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  
}));

export default function SimpleTabs() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <div>
      <div className={classes.head}>
        <h1>PROJECTS</h1>
      </div>
      <br></br>
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="About Project" {...a11yProps(0)} />
          <Tab label="Technology" {...a11yProps(1)} />
        
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <center><h1><b>GetADoc</b></h1></center>
        <h3> This is a website where you can take an appointment of any doctor in your locality or other places according to your problem.The doctor will give you a particular slot for visiting to their clinic or home visit at your place. This is a user-friendly website with simple UI. You don't have to wait for hours in queue for getting an appointment. Online Scheduling offers patients the ability to book appointment even when doctor's practice in closed. This system operate 24X7. This website helps to reduce burdensome administrative tasks for staff. It help staff to provide a better experience for patients. It gives benefit to both doctors as well as patients.</h3>
        <center><Button variant="contained" color="secondary"  onClick={(e) => {
      e.preventDefault();
      window.location.href='https://getadoc.herokuapp.com/';
      }}>
        View Project
     </Button></center>
      </TabPanel>
      <TabPanel value={value} index={1}>
       <h2>
            Front-End
       </h2>
        <ul>
            <li><h3>Html5</h3></li>
            <li><h3>Css3</h3></li>
            <li><h3>Bootstrap4</h3></li>
        </ul>
       <h2>
            Backend-End
       </h2>
        <ul>
            <li><h3>Python-Flask</h3></li>
        </ul>
       <h2>
            DBMS
       </h2>
        <ul>
            <li><h3>Postgresql</h3></li>
        </ul>
       <h2>
            Deployment
       </h2>
        <ul>
            <li><h3>Heroku</h3></li>
        </ul>
      </TabPanel>
      
    </div>
    </div>
  );
}