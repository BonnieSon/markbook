import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  blank: {
    flexGrow: 1,
  },
  login: {
    marginRight: theme.spacing(2),
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="#ffffff">
        <Toolbar>   
          <Button color="inherit">
            <Typography color="Primary" >
              markbook
            </Typography> 
           </Button>
          <div className={classes.blank}>            
          </div>
          <Button variant="outlined" className={classes.login}>Login</Button>
          <Avatar />
        </Toolbar>
      </AppBar>
    </div>
  );
}

