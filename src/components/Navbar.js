// conditional rendering login/ sign out
import React from 'react';
import LoginControls from './LoginControl'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import {
    AppBar,
    Toolbar,
    // ListItem,
    IconButton,
    // ListItemText,
    // Avatar,
    // Divider,
    // List,
    Typography,
    // Box 
} from "@material-ui/core";
import {
//     ArrowBack,
//     AssignmentInd,
//     Home,
//     Apps,
    // ContactMail
} from "@material-ui/icons";

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
            <AppBar position="static" style={{ background: "#888" }}>
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
              </Toolbar>
            </AppBar>
          </div>
        );
}
      
// export default Navbar
