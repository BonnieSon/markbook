import react from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import LoginScreen from './components/LoginScreen';
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
      inherit: {
      main: '#4D2900',
      },
    },
  });

  return (
    <>   
      <Switch>
        <Route exact path="/">
          <ThemeProvider theme={theme}>
            <LoginScreen />
          </ThemeProvider>          
        </Route>
        <Route path="/signup">
          <ThemeProvider theme={theme}>
            <SignUpScreen />
          </ThemeProvider>          
        </Route>
      </Switch> 
  </>
  );
}

export default App;
