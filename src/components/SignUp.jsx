import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import { Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles((theme) => ({
    root: {
      '*': {
        color: 'red',
      },
      margin: theme.spacing(1),
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    text: {
      paddingBottom: '1rem',
      marginTop: '1rem',
      fontWeight: 'bold',
      },
    birth: {
      paddingRight: '3rem',
    },
    idText: {
      '& > *': {
        margin: theme.spacing(1),
        width: '22ch',
        display: 'flex',
        flexDirection: 'column',
        },
    },
    container: {
        width: '50%',
        margin: theme.spacing(1),
        width: '25ch',
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    gender: {
      display: 'inline',
    },
    avatar: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      display: 'flex',
    },
    input: {
      display: 'none',
    },
    fileBtn: {
      margin: theme.spacing(3, 'auto'),
      display: 'flex',
      flexDirection: 'row',
    },
    upLoadBtn: {
      marginRight: '2rem',
    },
    signUpBtn: {
      marginTop: '6rem',
      padding: theme.spacing(2, 20),
      fontSize: '20px',
    },
}));


export function BasicTextFields() {
    const classes = useStyles();

    return (
      <>
      <div className={classes.root}> 
          <Typography className={classes.text}>
            아이디*
          </Typography>
          <TextField  id="standard-basic"label="ID" noValidate autoComplete="off" className={classes.idText} />
      </div>    
      <div className={classes.root}>  
          <Typography className={classes.text}>
            생년월일*
          </Typography>
            <TextField
                id="date"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
               }}
            />
       </div>       
</>
  );
}

export function RadioButtonsGroup() {
    const classes = useStyles();
    const [value, setValue] = React.useState('female');
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    return (
      <div className={classes.root}>
        <Typography className={classes.text}>
          성별*
        </Typography>
        <RadioGroup className={classes.gender} aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          <FormControlLabel value="female" control={<Radio size="small" color="#C4C4C4" />} label="여성" />
          <FormControlLabel value="male" control={<Radio size="small" color="#C4C4C4" />} label="남성" />
        </RadioGroup>
      </div>    
    );
}

export function CheckboxLabels() {
    const classes = useStyles();
    const [state, setState] = React.useState({
      checkedA: false,
      checkedB: false,
      checkedC: false,
      checkedD: false,
      checkedE: false,
     });
  
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };
  
    return (
      <div className={classes.root}>
        <Typography className={classes.text}>
          관심분야*
        </Typography>
        <FormGroup row>
          <FormControlLabel
            control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
            label="경영/경제"
          />
          <FormControlLabel
            control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" />}
            label="자기계발"
          />
          <FormControlLabel
            control={<Checkbox checked={state.checkedC} onChange={handleChange} name="checkedC" />}
            label="소설"
          />
          <FormControlLabel
            control={<Checkbox checked={state.checkedD} onChange={handleChange} name="checkedD" />}
            label="역사"
          />
          <FormControlLabel
            control={<Checkbox checked={state.checkedE} onChange={handleChange} name="checkedE" />}
            label="과학"
          />                        
        </FormGroup>
      </div>
  );
}

export function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.text}> 
        프로필 사진*
      </Typography>      
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.avatar} />
    </div>
  );
}

export function UploadButtons() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.fileBtn}>
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
        /> 
      <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span" className={classes.upLoadBtn} startIcon={<CloudUploadIcon />}>  
           파일선택
        </Button>
      </label>  
          <Button
          variant="contained"
          color="gray"
        className={classes.delBtn}
          startIcon={<DeleteIcon />}
        >
        파일삭제
      </Button>
      </div>
      <div>
      <Button className={classes.signUpBtn} variant="contained" href="#contained-buttons">회원가입</Button>
      </div>
    </div>
  );
}

// export function ContainedButtons() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Button className={classes.signUpBtn} variant="contained" href="#contained-buttons">회원가입</Button>
//     </div>
//   );
// }