import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BasicTextFields, RadioButtonsGroup, CheckboxLabels, ImageAvatars, UploadButtons } from './SignUp';
import { useDispatch } from 'react-redux';
import { register } from '../user/signUpSaga';


const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: '#FAEBD7',
    margin: theme.spacing('5rem', '22rem'),
    borderRadius: '5%',
  },
  title: {
    width: '60%',
    padding: theme.spacing(5, 0, 0, '10rem'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color: "#391F00",
  },
  form: {
    margin:theme.spacing('4rem', '16rem'),
    },
  submitBtn: {
    margin: theme.spacing('4rem', '-0.5rem'),
    padding: theme.spacing(2, 15),
    fontSize: '20px',
    border: 'none',
    backgroundColor:'#e0e0e0',
    boxShadow:  
      '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    transition: 'backgroundColor .10s',
    cursor: 'pointer',
    },
}));

const SignUpScreen = () => {

  const classes = useStyles();
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    //alert(e.target.checked);
    const likeCategory = [];
    const registerData = {
      nickName: e.target.nickName.value,
      birthday: e.target.birthday.value,
      gender: e.target.gender.value,
      likeCategory: likeCategory,
      avatarImg: e.target.avatarImg.value,
    }

    if(e.target.categoryBusiness.checked){
      likeCategory.push("Business")
    }
    if(e.target.categoryBusiness.checked)
    alert (registerData);
    dispatch(register(registerData));
  };

  return (  
    <div className={classes.background} >
      <h1 className={classes.title}>markbook 회원가입</h1>
      <form onSubmit={onSubmit} className={classes.form}>
        <BasicTextFields />
        <RadioButtonsGroup />
        <CheckboxLabels />
        <ImageAvatars />
        <UploadButtons htmlType="submit" />
        <input type="submit" variant="contained" href="#contained-buttons" className={classes.submitBtn} />
      </form> 
    </div>
  );
};

export default SignUpScreen;