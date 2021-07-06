import './App.css';
import Navbar from './components/Navbar';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#4D2900',
      },
    },
  });
  return (
    <div>
     <ThemeProvider theme={theme}>
      <Navbar />
     </ThemeProvider>  
    </div>
  );
}

export default App;
