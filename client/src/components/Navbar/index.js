import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  style:{
    background: 'linear-gradient(30deg, #1b5e20 30%, #81c784 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  }
  
}));


export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <Grid className={classes.style}>
    <div className={classes.root}>
      <AppBar position="static" className={classes.style}>
        <Toolbar>
          <Link to="/">
            <HomeWorkIcon edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </HomeWorkIcon>
          </Link>
          <Typography variant="h6" className={classes.title}>
            HoBBYDRoP
          </Typography>
          <Link to="/login"><Button color="inherit">Login/Signup</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
    </Grid>
  );
}


