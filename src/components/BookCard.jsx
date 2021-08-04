import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';


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
    display: 'flex'
  },
  ratingNum: {
    marginLeft: '3px'
  }
}));


const BookCard = (props) => {
  const classes = useStyles();

  return (
    <Link to={"/bookDetail/" + props.book.id}>
      <div className={classes.bookCard}>
        <img src={props.book.image} className={classes.image} />
          <div className={classes.name}>{props.book.name}</div>
          <div className={classes.author}>{props.book.author}</div>
          <div className={classes.rating}>
            <Rating name="read-only" value={Number(props.book.rating)} precision={0.5} readOnly />
          <div className={classes.ratingNum}>{props.book.rating}</div>
        </div>
      </div>
    </Link>
  )
}

export default BookCard;

