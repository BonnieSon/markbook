import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
  header: {
    flexGrow: 1,
    margin: theme.spacing(0, 'auto'),
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
      <AppBar position="static" color="secondary" className={classes.header}>
        <Toolbar className={classes.inner}>   
            <Typography>
              <a href="#" className={classes.logo}><img src="./images/logo.png" alt="markbook" /></a>
            </Typography> 
            <div className={classes.blank}>            
            </div>
          <Button variant="outlined" className={classes.login}>Login</Button>
          <Avatar />
        </Toolbar>
      </AppBar>
  );
}

