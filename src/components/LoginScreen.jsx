import React from 'react';
import {
    FacebookLoginButton,
    GoogleLoginButton,
    AppleLoginButton,
    } from 'react-social-login-buttons';
import { makeStyles } from '@material-ui/core/styles';



      const handleClick = (type) => {
        alert(`type : ${type}`);
      }

      const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
       
        title: {
          textAlign: 'center',
          margin: theme.spacing(10, 'auto'),
        },
        login: {
          width: '30%',
          // margin: 'auto',
          margin: theme.spacing(15, 'auto'),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          // textAlign: 'center',
        },
      }));


    export default () => {
      const classes = useStyles();


        return (
        <>  
          <h1 className={classes.title}>markbook 로그인</h1>
          <div className={classes.login}>
           <FacebookLoginButton onClick={() => handleClick('facebook')} />
           <GoogleLoginButton onClick={() => handleClick('google')} />
           <AppleLoginButton onClick={() => handleClick('apple')} />
          </div>
        </>  
        );
      }