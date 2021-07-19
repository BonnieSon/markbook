import react from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import LoginScreen from './components/LoginScreen';
import { Switch, Route } from 'react-router-dom';
import SignUpScreen from './components/SignUpScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainPage from './components/MainPage'; 
import MainNavbar from './components/MainNavbar';


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
            <MainPage />
          </Route>
        </Switch> 
      <ThemeProvider theme={theme}>    
        <Footer />
      </ThemeProvider>          
    </>
  );
}

export default App;
