import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  mainNav: {
    display:'flex',
    justifyContent: 'center',
    backgroundColor: '#d9d9d97d',
    padding: '0.5rem',
    margin: theme.spacing('2rem', 'auto'),
    fontWeight: 'bold',
    boxShadow: '10px 10px 10px -5px rgba(25, 42, 70, 0.2)',

  },
  category: {
    marginRight: '5rem',
  },
  link: {
    textDecoration: 'none',
    color: '#4D2900',
    '&:visited': {
      textDcoration: 'none',
      color: 'none',
    },
    '&:hover': {
      color: '#FF505F',
    },
    '&:active': {
      color: 'black',
    },
  },
}));

const MainNavbar = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.mainNav}>
        <span className={classes.category}><a href="#" className={classes.link}>경영/경제</a></span>
        <span className={classes.category}><a href="#" className={classes.link}>자기계발</a></span>
        <span className={classes.category}><a href="#" className={classes.link}>소설</a></span>
        <span className={classes.category}><a href="#" className={classes.link}>역사</a></span>
        <span className={classes.category}><a href="#" className={classes.link}>과학</a></span>
      </div>        
    </div>
    )
}

export default MainNavbar
