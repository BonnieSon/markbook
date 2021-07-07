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


        return (
        <>  
          <h1 className={classes.title}>markbook 로그인</h1>
          <div className={classes.login}>
            <div className={classes.facebook}>
             <FacebookLoginButton onClick={() => handleClick('facebook')} />
            </div>   
           <div className={classes.google}>
           <GoogleLoginButton onClick={() => handleClick('google')} />
           </div> 
           <div className={classes.apple}>
           <AppleLoginButton onClick={() => handleClick('apple')} />
           </div> 
          </div>
        </>  
        );
      }