import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import StarRateIcon from '@material-ui/icons/StarRate';



const useStyles = makeStyles((theme) => ({
  bookCard: {
    width: '150px',
    textAlign: 'center',
  },
  image: {
    width: '120px', 
    height: '180px',
  },
  name: {
    fontWeight: 'bold',
    fontSize: '16px',
    marginTop: '0.5rem',
  },
  author: {
    fontSize: '14px',
    margin: '0.5rem',
  },
  rating: {
    display: 'flex',
  },
  star: {
    color: '#FFD700',
    marginRight: '0.5rem',
  }
}));


const BookCard = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.bookCard}>
      <img src={props.image} className={classes.image} />
        <div className={classes.name}>{props.name}</div>
        <div className={classes.author}>{props.author}</div>
        <div className={classes.rating}>
          <div className={classes.star}>
          <StarRateIcon></StarRateIcon>
          <StarRateIcon></StarRateIcon>
          <StarRateIcon></StarRateIcon>
          <StarRateIcon></StarRateIcon>
          <StarRateIcon></StarRateIcon>
          </div>
          <div>{props.rating}</div>
        </div>
    </div>
  )
}

export default BookCard
