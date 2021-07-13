import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'static',
  },
  toolBar: {
    minHeight: '120px',
  },
  text: {
    margin: theme.spacing('auto','16rem'),
    color: '#ffffff',
  },
  copy: {
    padding: '1rem',
  }

}));

export default () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="absolute" backgroundcolor="primary" className={classes.appBar} >
        <Toolbar className={classes.toolBar}>   
          <img src="./images/footer_logo.png" />
            <Typography className={classes.text}>
              저희 markbook사이트에서는 합리적인 독서를 위해 목차별 리뷰를 남길 수 있습니다.<br />
              <span className={classes.copy}>Copyright 2021 &copy; All rights reserved. bogyung Son | bbonnie8989@gmail.com</span>              
            </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
