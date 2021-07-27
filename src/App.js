import react from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import LoginScreen from './components/LoginScreen';
import { Switch, Route } from 'react-router-dom';
import SignUpScreen from './components/SignUpScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainPage from './components/MainTitle'; 
import MainNavbar from './components/MainNavbar';
import MainTitle from './components/MainTitle';
import MainScreen from './components/MainScreen';
import { makeStyles } from '@material-ui/core/styles';
import DetailPage from './components/DetailPage';


const useStyles = makeStyles((theme) => ({
  main: {
    minWidth: '1148px',
    minHight: '300px'
  }
}));


function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#391F00',
      },
      secondary: {
        main: '#ffffff',
      },
      inherit: {
      main: '#4D2900',
      },
    },
  });

  const classes = useStyles();

  return (

    <>
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>          
        <Switch>
          <Route exact path="/">
            <LoginScreen />
          </Route>
          <Route path="/signup">
            <SignUpScreen />
          </Route>
          <Route path="/mainpage">
            <MainNavbar />
            <div className={classes.main}>   
              <MainTitle />
              <MainScreen />
            </div>
          </Route>
          <Route path="/detailpage">
            <MainNavbar />
            <div className={classes.main}>   
              <DetailPage />
            </div>
          </Route>
        </Switch> 
      <ThemeProvider theme={theme}>    
        <Footer />
      </ThemeProvider>          
    </>
  );
}

export default App;
