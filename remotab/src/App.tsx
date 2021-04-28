import React from 'react';
import logo from './assets/logoRemotab.png';
import './App.css';
import theme from "./styles/theme";
import { ThemeProvider } from '@material-ui/core/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <img src={logo} alt="logo" />
      </div>
    </ThemeProvider>);
}

export default App;





