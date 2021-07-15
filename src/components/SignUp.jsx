import React from 'react';
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
import { useStyles } from './SignUpStyles';


export function BasicTextFields() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}> 
        <Typography className={classes.text}>
          닉네임*
        </Typography>
        <TextField  name="nickName" id="standard-basic" label="닉네임" noValidate autoComplete="off" className={classes.idText} />
      </div>    
      <div className={classes.root}>  
        <Typography className={classes.text}>
          생년월일*
        </Typography>
        <TextField
          name="birthday"
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
  
  return (
    <div className={classes.root}>
      <Typography className={classes.text}>
        성별*
      </Typography>
      <RadioGroup className={classes.gender} aria-label="gender" name="gender">
        <FormControlLabel value="female" control={<Radio size="small" color="#C4C4C4" />} label="여성" />
        <FormControlLabel value="male" control={<Radio size="small" color="#C4C4C4" />} label="남성" />
      </RadioGroup>
    </div>    
  );
}

export function CheckboxLabels() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Typography className={classes.text}>
        관심분야*
      </Typography>
      <FormGroup row className={classes.category}>
        <FormControlLabel
          control={<Checkbox  name="categoryBusiness" color="primary" value="Business" />}
          label="경영/경제"
        />
        <FormControlLabel
          control={<Checkbox  name="categoryImprovment" color="primary" value="Improvment" />}
          label="자기계발"
        />
        <FormControlLabel
          control={<Checkbox name="categoryNovel" color="primary" value="Novel" />}
          label="소설"
        />
        <FormControlLabel
          control={<Checkbox  name="categoryHistory" color="primary" value="History" />}
          label="역사"
        />
          <FormControlLabel
            control={<Checkbox  name="categoryScience" color="primary" value="Science" />}
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
          name="avatarImg"
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
    </div>
  );
}
