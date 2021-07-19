import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  section: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '6rem',
  },
  titleBtn: {
    backgroundColor: '#E16A00',
    color: '#fff',
    marginTop: '2rem',
    border: 'none',
    borderRadius: '5px',
    padding: '0.9rem',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#cc6102',
      transition: 'all 0.3s ease 0s',
    },         
  }
}));


const MainPage = () => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <div className={classes.title}>
        <h2>이 달의 추천도서</h2>
        <p>이 달의 추천도서는 markbook 사이트에서 <br /> 
        매 달 평점이 높은 책을 엄선하여 추천드립니다.</p>
        <button className={classes.titleBtn}>이 달의 추천도서</button>
      </div>
      <div className={classes.img}>  
        <img src="./images/main_title_background_img.png" />
      </div>
    </section>
    )
}

export default MainPage
