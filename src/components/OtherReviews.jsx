import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Replay } from '@material-ui/icons';
import { instance } from '../config/clientInstance';
import Rating from '@material-ui/lab/Rating';



const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto 450px',
  },
  titleWrap: {
    borderBottom: '2px solid #7d8e9e',
    marginBottom: '15px',
    padding: '10px 0 8px 0',
  },
  title:{
    alignItems: 'center',
  },
  raplyWrap: {
    display: 'flex',
    flexDirection: 'column',
    borderBottom: '1px solid #7d8e9e',
    paddingBottom: '15px',
    marginBottom: '100px',



//     position: 'static',
//     width: '680px',
//     height: '265px',
//     left: '0px',
//     top: '0px',

// /* Link Water */

// border: '2px solid #d1d5d9',
// boxSizing: 'border-box',
// borderRadius: '0px 0px 8px 8px'

  }
}))


const OtherReviews = () => {

  const classes = useStyles();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    instance.get('/reviews/1')
    .then((response) => {
      console.log(`resposne :${JSON.stringify(response.data)}`);
      const review = response.data;
      instance.get(`/users/${review.author}`)
      .then(res2 => { 
          review.nickname = res2.data.nickname;
          setReviews(review);
          console.log(review)
      });
    })
  }, []);

  return (
    <div>
      {
        (reviews) ? (
          <div className={classes.root}> 
            <div className={classes.titleWrap}>
              <h3 className={classes.title}>총평 회원 리뷰</h3>
            </div>  
            <div className={classes.raplyWrap}>
              {
                <div>{reviews.users.nickname}</div>
              }
              {
                <div><Rating name="read-only" value={Number(reviews.rating)} precision={0.5} readOnly /></div>
              }
              {
                <div>{reviews.content}</div>
              }
            </div>
          </div>
        ) : <h3>Loading ..</h3>
      }
    </div>
  );
};

export default OtherReviews;