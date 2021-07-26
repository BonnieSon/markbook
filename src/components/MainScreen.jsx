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
    width: '190px',
    height: '350px',
    boxShadow: '10px 10px 10px -5px rgba(25, 42, 70, 0.2)',
    borderRadius: '8px',
    margin: '0 20px',
  },
  listContainer: {
    display: 'flex',
    justifyContent: 'center', 
    margin: '8rem 19rem' 
  }
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
      // const bestBooks = response.data;
      console.log(`resposne :${JSON.stringify(response.data)}`);
      setBestBooks(response.data);
    })
  }, []);

  useEffect(() => {
    instance.get('/books?category=business')
    .then((response) => {
      const business = response.data;
      console.log(`resposne :${JSON.stringify(response)}`);
      setBesiness(business);
    })
  }, []);

  return (
    <div className={classes.inner}>
      <div className={classes.roadMapTitle}>
        <h3>평점 높은 순위</h3>
      </div>
      <div className={classes.listContainer}>
        <Swiper
          className='swiper-container'
          spaceBetween={30}
          slidesPerView={3}
	        navigation //*
          scrollbar={{ draggable: true }} //*
          onSwiper={(swiper) => console.log(swiper)}
          >
          {bestBooks.map(bestBook => {
            return(
              <SwiperSlide>
                <div className={classes.card}>
                  <BookCard name={bestBook.name} author={bestBook.author} image={bestBook.image}/>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
          {/* <ul className={classes.cardList}>
            {bestBooks.map(bestBook => 
              <li className={classes.card}>
                <BookCard 
                name={bestBook.name} author={bestBook.author} image={bestBook.image}>
                </BookCard>
              </li>
            )}
            <li className={classes.card}><BookCard></BookCard></li>
            <li className={classes.card}></li>
            <li className={classes.card}></li>
          </ul> */}
        </div>
        <div className={classes.roadMapTitle}>
          <h3>경제/경영</h3>
        </div>
        <div className={classes.listContainer}>
          {/* <ul className={classes.cardList}>
          {business.map(business => 
              <li className={classes.card}>
                <BookCard 
                name={business.name} author={business.author} image={business.image} key={business.id}>
                </BookCard>
              </li>
>
          </ul> */}
        <Swiper
          className='swiper-container'
          spaceBetween={35}
          slidesPerView={6}
	        navigation //*
          pagination={{ clickable: true }} //*
          scrollbar={{ draggable: true }} //*
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
        <SwiperSlide className={classes.card}> slide1 </SwiperSlide>
        <SwiperSlide className={classes.card}> slide2 </SwiperSlide>
        <SwiperSlide className={classes.card}> slide3 </SwiperSlide>
        <SwiperSlide className={classes.card}> slide4 </SwiperSlide>
        <SwiperSlide className={classes.card}> slide5 </SwiperSlide>
        <SwiperSlide className={classes.card}> slide6 </SwiperSlide>
      </Swiper>
        </div>
        <div className={classes.roadMapTitle}>
          <h3>자기계발</h3>
        </div>
        <div className={classes.listContainer}>
        <Swiper
          className='swiper-container'
          spaceBetween={35}
          slidesPerView={6}
	        navigation //*
          pagination={{ clickable: true }} //*
          scrollbar={{ draggable: true }} //*
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
        <SwiperSlide className={classes.card}> slide1 </SwiperSlide>
        <SwiperSlide className={classes.card}> slide2 </SwiperSlide>
        <SwiperSlide className={classes.card}> slide3 </SwiperSlide>
        <SwiperSlide className={classes.card}> slide4 </SwiperSlide>
        <SwiperSlide className={classes.card}> slide5 </SwiperSlide>
        <SwiperSlide className={classes.card}> slide6 </SwiperSlide>
      </Swiper>
        </div>
      </div>
  )
} 

export default MainScreen;