import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { instance } from '../config/clientInstance';


const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: 'rgba(178, 56, 66, 1)',
    color: '#fff',
    marginLeft:'1rem',
    padding: '3px 5px 3px 10px',
  },
  details: {
    width: '100%',
    boxShadow: '10px 10px 10px -5px rgba(25, 42, 70, 0.2)',
    borderRadius: '8px'
  }    
}));

const ContentsReview = (props) => {
  const name = props.review.name;
  const reviewIds = props.review.reviews;
  // // [1, 2, 3]
  const [ toggle, setToggle ] = useState(false);
  const [ reviews, setReviews ] = useState([]);

  useEffect(() => {
    if(reviewIds) {
      let callString = "/reviews?"
      for(const reviewId of reviewIds){
        callString += "id=" + reviewId + "&";
      }
      instance.get(callString)
      .then((res) => {
        console.log(callString);
        setReviews(res.data);
      });
    }
  }, []);

  const handleClick = () => { 
    setToggle(!toggle); 
    console.log('The link was clicked.');
  }

  const classes = useStyles();

    return(
      <div>
        {props.review.name}
        <Button className={classes.button} variant="contained" onClick={handleClick}>
        목차 리뷰 <ExpandMoreIcon />
        </Button>
        { toggle ? (
          <AccordionDetails className={classes.details}>
            {reviews.map((review, index) => {
              return(
                <Typography key={index}>
                  {review.content}
                </Typography>
                )
            })} 
          </AccordionDetails>
        ) : <div></div>
      } 
      </div>
  )        
};

export default ContentsReview;