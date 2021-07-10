import './App.css';
import Navbar from './components/Navbar';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import LoginScreen from './components/LoginScreen';
import Footer from './components/Footer';  
import { Switch, Route } from 'react-router-dom';
import SignUpScreen from './components/SignUpScreen';


function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#391F00',
      },
      secondary: {
        main: '#ffffff',
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
      </Switch>
      <ThemeProvider theme={theme}>
       <Footer />
      </ThemeProvider> 
  </>
  );
}

export default App;
