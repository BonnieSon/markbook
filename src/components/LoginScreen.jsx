import React from 'react';
import {
    FacebookLoginButton,
    GoogleLoginButton,
    AppleLoginButton,
    } from 'react-social-login-buttons';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { GOOGLE_LOGIN, FACEBOOK_LOGIN, APPLE_LOGIN } from '../user/loginSaga';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor:'#FAEBD7',
    margin: theme.spacing(7,50),
    borderRadius: theme.spacing(3),
    
    },
  title: {
    textAlign: 'center',
    marginBottom: 0,
    padding: theme.spacing(7, 0, 4, 0),
  },
  login: {
    width: '40%',
    margin: theme.spacing(0, 'auto'),
    padding: theme.spacing(3, 0, 7, 0),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',    
  },
  facebook: {
    width:'80%',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  google: {
    width:'80%',
    marginBottom: '1rem',
  },
  apple: {
    width:'80%',

  },
}));

export default () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <>
      <div className={classes.root}> 
        <h1 className={classes.title}>markbook 로그인</h1>
        <div className={classes.login}>
          <div className={classes.facebook}>
            <FacebookLoginButton text="facebook 연결하기" onClick={() => dispatch(FACEBOOK_LOGIN())} />
          </div>   
          <div className={classes.google}>
            <GoogleLoginButton text="Google 연결하기" onClick={() => dispatch(GOOGLE_LOGIN())} />
          </div> 
          <div className={classes.apple}>
            <AppleLoginButton text="Apple 연결하기" onClick={() => dispatch(APPLE_LOGIN())} />
          </div> 
        </div>
      </div> 
    </> 
  );
}