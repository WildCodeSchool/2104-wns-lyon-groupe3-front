import React from 'react';
import logo from './assets/logoRemotab.png';
//import './App.css';
import theme from "./styles/theme";
import { makeStyles } from "@material-ui/core"
import { ThemeProvider } from '@material-ui/core/styles';
import { ToggleButton  } from 'ui-neumorphism';
import HomePage from './components/HomePage';

const useStyles = makeStyles(theme => ({
 
  myBackground: {
   // background: "#F7F7FF",
    height:"100%",
    flex: " 1 1 auto"
  },
  neumorphismNameAdmin: {
    position: "absolute",
    top: "20px",
    right: "100px",
    width:"200px",
    borderRadius: "47px",
    boxShadow: "inset 14px 14px 40px #0A2463 , inset -14px -14px 40px #F7F7FF",
  },
  logo: {
    width: "200px",
  }
}))

function App() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.myBackground}>
        <div style={{display: "flex", justifyContent:"center"}}>
          <img src={logo} alt="logo" className={classes.logo}/>
          <ToggleButton
            value={1}
            color='var(--primary)'

          >
            Nom admin
          </ToggleButton>
        </div>
        <HomePage/>
      </div>
    </ThemeProvider>);
}

export default App;





