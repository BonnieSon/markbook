import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
   appBar: {
    minHeight: 80,
    margin: theme.spacing(80, 0, 0, 0),
    boxSizing: 'border-box',
   },
  // toolbar: {
  //   minHeight: 100,
  // },
  text: {
    margin: theme.spacing(2, 30, 2, 30),
  },

}));

export default () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <AppBar position="absolute" backgroundcolor="primary" className={classes.appBar} >
        <Toolbar>   
          <img src="./images/footer_logo.png" />
            <Typography color="secondary" className={classes.text}>
              저희 markbook사이트에서는 합리적인 독서를 위해 목차별 리뷰를 남길 수 있습니다.<br />
              Copyright 2021 © All rights reserved. bogyung Son | bbonnie8989@gmail.com              
            </Typography>
        </Toolbar>
      </AppBar>
    </footer>
  );
}
