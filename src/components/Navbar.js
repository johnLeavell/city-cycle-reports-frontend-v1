import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, NavLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    '& > *': {
    margin: theme.spacing(1),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
},
}));
  
export default function Navbar() {
    const classes = useStyles();
        return (
          <div className={classes.root}>
            <AppBar position="sticky">
              <Toolbar>
                <IconButton 
                edge="start" 
                className={classes.menuButton} 
                color="inherit" 
                aria-label="menu">
                <MenuIcon />
                </IconButton>
                <Typography variant="h6" 
                className={classes.title}>
                  City Cycle Reports
                </Typography>
                <Link to="/">
                <Button color="inherit">Home</Button>
                </Link>
                <NavLink to="/dashboard">
                <Button color="inherit">My Reports</Button>
                </NavLink>
                <NavLink to="/login">
                <Button color="inherit">Login</Button>
                </NavLink>
                <NavLink to="/signup">
                <Button color="inherit">Signup</Button>
                </NavLink>
                <NavLink to="/about">
                <Button color="inherit">About</Button>
                </NavLink>
              </Toolbar>
            </AppBar>
          </div>
        );
}
      
// export default Navbar
