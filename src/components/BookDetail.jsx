import React, { useState, useEffect } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Rating from '@material-ui/lab/Rating';
import { instance } from '../config/clientInstance';
import { Book } from '@material-ui/icons';
import MyReview from './MyReview';
import ContentsReview from './ContentsReview';


const useStyles = makeStyles((theme) => ({
  book: {
    display: 'inline-flex',
    flexFlow: 'row nowrap',
    marginLeft: '450px',
    marginTop: '100px',
  },
  image: {
  },
  bookDetail: {
    left: '549px',
    top: '248px',
    display: 'inline-flex',
    flexDirection: 'column',
    marginLeft: '3rem'
  },
  category: {
    display: 'inline-flex',
  },
  categoryName: {
    marginLeft: '0.5rem',
    border: 'solid 1px rgba(56, 214, 0, 0.22)',
    borderRadius: '4px',
    backgroundColor: 'rgba(56, 214, 0, 0.22)'
  },
  bookName:{
    display: 'inline-flex',
    marginTop: '-0.1rem'
  },
  favoritBook: {
    marginTop: '20px',
  },
  buyBtn: {
    margin: '1rem',
    padding: '-10px', 
  },
  rating: {
    display: 'inline-flex',
    margin:0
  },
  bookIndex: {
    margin: '20px 450px',
  },
  contents: {
    marginBottom: '2rem'
  }
}));

const BookDetail = () => {
  const classes = useStyles();

  const [book, setBook] = useState(null);


  useEffect(() => {
    instance.get('/books/1')
    .then((response) => {
      console.log(`resposne :${JSON.stringify(response.data)}`);
      setBook(response.data);
      console.log(setBook)
    })
  }, []);

  
  return (
    <div>
      {
        (book) ? (
          <div>
      <div className={classes.book}>
      <div className={classes.image}>
        {
          <img src={book.image}/>
        }   
      </div>
      <div className={classes.bookDetail}>
        <div className={classes.category}>
          <div>카테고리</div>
            {
              <div className={classes.categoryName}>{book.categoryKor}</div>               
            }
        </div>
        <div className={classes.bookName}>
          <h3>
            {      
              <div>{book.name}</div>
            }   
          </h3>
          <IconButton aria-label="add to favorites">
          <FavoriteBorderIcon />
          </IconButton><p className={classes.favoritBook}>책 찜하기</p>
            {
              <Button href={book.buyLink} variant="outlined" color="secondary" className={classes.buyBtn} size="small">
              구매하기
              </Button>
            }  
        </div>
        <div className={classes.rating}>
          <div>총 평점</div>
            {
              <Rating name="read-only" value={Number(book.rating)} precision={0.5} readOnly />
            }  
            {
              <div>총평리뷰 {book.rating}</div>
            }  
        </div>
          {
            <div><strong>{book.author}</strong> 지음</div>
          }
          {  
            <div><strong>{book.publisher}</strong> 출판</div>
          }
          {  
            <div>{book.publicationDate}</div> 
          }      
        </div>
      </div>
      <div className={classes.bookIndex}>
        <h3>목차</h3>
        <div>
          {book.contents.map((content) => {
          return (
          <div className={classes.contents}>
            <ContentsReview review={content} />
          </div>
            )
          })}
        </div>
      </div>
    </div>
        ) : <h3>Loading ..</h3>
      }
    </div>
  );
};

export default BookDetail;