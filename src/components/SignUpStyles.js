import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
        title: {
            width: '60%',
            margin: theme.spacing(10, 'auto'),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
        },         
        root: {
          '*': {
            color: 'red',
          },
          margin: theme.spacing(1),
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        },
        text: {
          paddingBottom: '1rem',
          marginTop: '1rem',
          fontWeight: 'bold',
          },
        birth: {
          paddingRight: '3rem',
        },
        idText: {
          '& > *': {
            margin: theme.spacing(1),
            width: '22ch',
            display: 'flex',
            flexDirection: 'column',
            },
        },
        container: {
            width: '50%',
            margin: theme.spacing(1),
            width: '25ch',
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          width: 200,
        },
        gender: {
          display: 'inline',
        },
        avatar: {
          width: theme.spacing(7),
          height: theme.spacing(7),
          display: 'flex',
        },
        input: {
          display: 'none',
        },
        fileBtn: {
          margin: theme.spacing(3, 'auto'),
          display: 'flex',
          flexDirection: 'row',
        },
        upLoadBtn: {
          marginRight: '2rem',
        },
        signUpBtn: {
          marginTop: '6rem',
          padding: theme.spacing(2, 20),
          fontSize: '20px',
        },
    }));

