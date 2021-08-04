import React from 'react';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto 450px',
    // border: '0.5px solid',
    // borderRadius: '10px'
  },
  regTitle: {
    marginBottom: '15px',
    padding: '10px 0 8px 0',
    borderBottom: '2px solid #7d8e9e',
  },
  titleText: {
    display: 'inline-block',
    fontSize: '20px',
    color: '#59667a',
    fontWeight: '700',
    letterSpacing: '-.03em'
  },
  reviewSection:{
    display: 'fixed',
    width: '100%',
  },
  reviewForm: {
   display: 'inline-block',
    margin: '0.3rem 0 3rem 0'
  },
  textarea: {
    border: '2px solid #d1d5d9',
    borderRadius: '5px',
    boxSizing: 'border-box',
    width: '283%',
    height: '112px',
    fontWeight: '700',
    fontSize: '13px',
    letterSpacing: '-.03em',
    padding: '12px 15px',
    lineHeight: '1.5em',
    color: '#59667a'
    },
    submitBtn: {
      height: '112px',
      left:'363px',
    },
    textBtn: {
      display: 'flex',
    }
}))



const MyReview = () => {
  const classes = useStyles();

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className={classes.root}>
      <div className={classes.regTitle}>
        <h3 className={classes.titleText}>총평 리뷰</h3>
      </div>
      <div>
        <div className={classes.reviewSection}>
        <div>이 책을 평가해주세요!</div>
      </div>
      <form className={classes.reviewForm} onSubmit={onSubmit}>
        <Rating
          name="customized-empty"
          defaultValue={0}
          precision={0.5}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
        />
        <div className={classes.textBtn}>
        <div>
          <textarea name="content" title="리뷰 입력" placeholder="총 평 리뷰 입력해주세요" className={classes.textarea}></textarea>
        </div>
        <Button variant="outlined" color="secondary" type="submit" className={classes.submitBtn}>
        등록
        </Button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default MyReview;