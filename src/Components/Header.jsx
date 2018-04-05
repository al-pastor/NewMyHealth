import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import blue from 'material-ui/colors/blue';
const downloadsjs = require("downloadjs");


const Header = props => {
    return (
    <div className='header'>
      <AppBar position="static" >
        <Toolbar styles="background-color: dodgerblue !important">
          <Typography variant="title" color="inherit" className="left_nav">
          {props.month.toUpperCase()}
          </Typography>
          <Button color="inherit" >HOME</Button>
           <Button color="inherit" href="mailto:yourDoctor@gmail.com?subject=My Symptoms&body=Hello,%0A I am attaching a file with all my symptom data. I hope that it's useful. %0A Thank you for your time, and attention! %0A &attachment=/Users/academieange/Downloads/csv\ \(8\).html">Email</Button>
          <Button color="inherit" onClick={()=>{ downloadsjs('/export/csv')}} >Download</Button>
          <Button color="inherit" onClick={()=>{ downloadsjs('MySymptom.csv')}} >EXPORT</Button>
          <Button color="inherit">LOGOUT</Button>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default Header;