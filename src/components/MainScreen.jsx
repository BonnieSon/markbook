import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BookCard from './BookCard';
import { instance } from '../config/clientInstance';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { 
  Navigation, 
  Pagination, 
  Scrollbar, 
  A11y
} from "swiper"; //*


//style
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss"; // *
import "swiper/components/pagination/pagination.scss"; // *
import "swiper/components/scrollbar/scrollbar.scss"; // *

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const useStyles = makeStyles((theme) => ({
  roadMapTitle: {
    textAlign: 'center',
    margin: '8rem auto 5rem',
  },
  cardList: {
    display : 'flex',
    listStyle: 'none',
  },
  card: {
    //  width: '80px',
    // height: '250px',
    // boxShadow: '10px 10px 10px -5px rgba(25, 42, 70, 0.2)',
    // borderRadius: '8px',
     margin: '0 45px',
  },
  listContainer: {
    display: 'flex',
    justifyContent: 'center', 
    margin: '5rem 19rem 10rem ' 
  },
}));


const MainScreen = () => {
  const classes = useStyles();

  const [bestBooks, setBestBooks] = useState([]);
  // 나머지 state 경영경제
  const [business, setBesiness] = useState([]);

  const [improvment, setImprovment] = useState([]);
  
  useEffect(() => {
    instance.get('/books?category=bestBooks')
    .then((response) => {
      console.log(`resposne :${JSON.stringify(response.data)}`);
      setBestBooks([...response.data])
    })
  }, []);

  useEffect(() => {
    instance.get('/books?category=business')
    .then((response) => {
      console.log(`resposne :${JSON.stringify(response)}`);
      setBesiness([...response.data]);
    })
  }, []);

  useEffect(() => {
    instance.get('/books?category=improvment')
    .then((response) => {
      console.log(`resposne :${JSON.stringify(response)}`);
      setImprovment([...response.data]);
    })
  }, []);

  return (
    <div className={classes.inner}>
      <div className={classes.roadMapTitle}>
        <h2>평점 높은 순위</h2>
      </div>
      <div className={classes.listContainer}>    
        <Swiper
        className='swiper-container'
          spaceBetween={-380}
          slidesPerView={3}
	        navigation //*
          // pagination={{ clickable: true }} //*
          // scrollbar={{ draggable: true }} //*
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          >
          {bestBooks.map((bestBook) => {
            return(
              <SwiperSlide className={classes.card}>
                <BookCard book={bestBook} />
              </SwiperSlide>
            )
          })}
          </Swiper>
        </div>
        <div className={classes.roadMapTitle}>
          <h2>경제/경영</h2>
        </div>
        <div className={classes.listContainer}>
        <Swiper
          className='swiper-container'
          spaceBetween={-380}
          slidesPerView={3}
	        navigation //*
          // pagination={{ clickable: true }} //*
          // scrollbar={{ pagination: true }} //*
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
        {business.map((business) => {  
          return(
            <SwiperSlide className={classes.card}>
                <BookCard book={business}/>
            </SwiperSlide>
            )
          })}
        </Swiper>
        </div>
        <div className={classes.roadMapTitle}>
          <h2>자기계발</h2>
        </div>
        <div className={classes.listContainer}>
        <Swiper
          className='swiper-container'
          spaceBetween={-380}
          slidesPerView={3}
	        navigation //*
          // pagination={{ clickable: true }} //*
          // scrollbar={{ draggable: true }} //*
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
        {improvment.map((improvment) => {  
          return(
            <SwiperSlide className={classes.card}>
                <BookCard book={improvment} />
            </SwiperSlide>
            )
          })}
      </Swiper>
        </div>
      </div>
  )
} 

export default MainScreen;