import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import StarRateIcon from '@material-ui/icons/StarRate';



const useStyles = makeStyles((theme) => ({
  imgSize: {
    width: '190px',
    height: '220px'
  },
  bookCard: {
    margin: '0.5rem 2rem',
    textAlign: 'center'
  }
}));


const BookCard = (props) => {
  const classes = useStyles();

  return (
    <div>

      <img src={props.image} className={classes.imgSize} />
      <div className={classes.bookCard}>
        {props.name}<br />
        {props.author}<br />
        <StarRateIcon></StarRateIcon>
        {props.rating}<br />
        {props.key}
      </div>
    </div>
  )
}

export default BookCard
