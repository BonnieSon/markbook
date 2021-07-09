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
          flexGrow: 1,
        },
       
        title: {
          textAlign: 'center',
          padding: theme.spacing(7, 0),
        },
        login: {
          width: '30%',
          // margin: 'auto',
          margin: theme.spacing(5, 'auto'),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          // textAlign: 'center',
          
        },
        facebook: {
          width:'60%',
          marginBottom: '1rem',
          textAlign: 'center',
          // margin: '0',
        },
        google: {
          width:'60%',
          marginBottom: '1rem',
        },
        apple: {
          width:'60%',
        },

      }));


    export default () => {
      const classes = useStyles();
      const dispatch = useDispatch();


        return (
        <>  
          <h1 className={classes.title}>markbook 로그인</h1>
          <div className={classes.login}>
            <div className={classes.facebook}>
             <FacebookLoginButton text="facebook 연결하기" onClick={() => dispatch(FACEBOOK_LOGIN)} />
            </div>   
           <div className={classes.google}>
           <GoogleLoginButton text="Google 연결하기" onClick={() => dispatch(GOOGLE_LOGIN)} />
           </div> 
           <div className={classes.apple}>
           <AppleLoginButton text="Apple 연결하기" onClick={() => dispatch(APPLE_LOGIN)} />
           </div> 
          </div>
        </>  
        );
      }