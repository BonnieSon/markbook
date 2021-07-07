import './App.css';
import Navbar from './components/Navbar';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import LoginScreen from './components/LoginScreen';
import Footer from './components/Footer';  



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
      <LoginScreen />
      <div>
       <ThemeProvider theme={theme}>
        <Footer />
       </ThemeProvider>
      </div> 
  </>
  );
}

export default App;
