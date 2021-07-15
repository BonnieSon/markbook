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
          margin: theme.spacing(1),
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        },
        text: {
          paddingBottom: '1.2rem',
          marginTop: '2rem',
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
        category: {
          flexDirection: 'column',
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
          margin: theme.spacing(3, -0.3),
          display: 'flex',
          flexDirection: 'row',
        },
        upLoadBtn: {
          marginRight: '2rem',
        },
        delBtn: {
          marginRight: '-5rem',
        }
    }));

