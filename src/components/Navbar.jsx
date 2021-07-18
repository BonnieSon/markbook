import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
  header: {
    flexGrow: 1,
    margin: theme.spacing(0, 'auto'),
  }, 
  blank: {
    flexGrow: 1,
  },
  login: {
    marginRight: theme.spacing(2),
  },
  search: {
    //flexGrow: 1,
    marginRight:'21rem',
    marginLeft: '20rem',
    position: 'relative',
    border: theme.spacing(0.1, 'solid', '#D9D9D9'),
    borderRadius: theme.spacing(0.5),
    alignItems: 'center',
  },
  searchInput: {
    width: '22rem',
    height: '100%',
    fontSize: '1.3rem',
    position: 'relative',
    border: 'none',
    outline: 'none',
    padding: 0,
  },
  searchBtn: {
    height: '100%',
    padding: theme.spacing(0.5, 0.7, 0.7),
    margin: theme.spacing(0, 'auto'),
    border: 'none',
    cursor: 'pointer',
    display: 'absolute',
    borderRadius: theme.spacing(0.5),
  },
  logout: {
    marginRight: '1rem',
  },
  avatar: {
    //marginLeft: '3rem',

  }
}));

export default function Navbar(){
  const classes = useStyles();
  const user = useSelector(state => state.user.user);

  return (
      <AppBar position="static" color="secondary" className={classes.header}>
        <Toolbar className={classes.inner}>   
            <Typography>
              <a href="#" className={classes.logo}><img src="./images/logo.png" alt="markbook" /></a>
            </Typography>
            <div className={classes.blank}></div>
            { (user) && (<SearchBox/>) }
            { (user) ? <Button variant="outlined" className={classes.logout}>Logout</Button> : ( <Button variant="outlined" className={classes.login}>Login</Button> )}
          { (user) ? <div><Avatar className={classes.avatar} /></div> : <Avatar />}
        </Toolbar>
      </AppBar>
  );
}

function SearchBox() {
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <input type="search" name="search" placeholder="제목, 저자, 출판사 검색" className={classes.searchInput} /><button className={classes.searchBtn}><SearchIcon /></button>             
    </div>
  );
}


// {
//   nickName :
//   gender :
//   category : [business],
//   fileImage : file
// }