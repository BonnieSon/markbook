import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SignUp, { BasicTextFields, RadioButtonsGroup, CheckboxLabels, ImageAvatars, UploadButtons } from './SignUp';

const useStyles = makeStyles((theme) => ({
    title: {
        width: '60%',
        margin: theme.spacing(10, 'auto'),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    }    
        
}));

const SignUpScreen = () =>{
    const [Id, setId] = useState('');
    const [value, setValue] = useState('female');
    const [state, setState] = useState({
    checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false,
        checkedE: false,
    });


    const onSubmit = (e) => {
        e.preventDefault();
    };

    // // Coustom Hook 이전
    // const onChangeId = (e) => {
    //     setId(e.target.value);
    // };
    // const onChangeTerm = (e) => {
    //     //체크박스 초기화
    //     setTermError(false);
    //     setTerm(e.target.checked);
    // }

    const classes = useStyles();

    return (
      <>  
        <h1 className={classes.title}>markbook 회원가입을 환영합니다.</h1>
        <form onSubmit={onSubmit} style={{marginLeft:'32rem'}}>
                <BasicTextFields />
                <RadioButtonsGroup />
                <CheckboxLabels />
                <ImageAvatars />
                <UploadButtons htmlType="submit" />
        </form>
      </>  
    );
};

export default SignUpScreen;