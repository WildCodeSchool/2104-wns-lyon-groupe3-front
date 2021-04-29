import React from 'react';
import logo from './assets/logoRemotab.png';
//import './App.css';
import theme from "./styles/theme";
import { makeStyles } from "@material-ui/core"
import { ThemeProvider } from '@material-ui/core/styles';
import { ToggleButton } from 'ui-neumorphism';
import 'ui-neumorphism/dist/index.css'

import HomePage from './components/HomePage';
import Form from './components/Form'
import { light } from '@material-ui/core/styles/createPalette';

const useStyles = makeStyles(theme => ({
 
  myBackground: {
    background: "#F7F7FF",
    minHeight: "100vh"
  },
  toggleButtonNameAdmin: {
    position: "absolute",
    top: "20px",
    right: "80px",
    width: "150px"
  },
  logo: {
    width: "250px",
  },
  myNav: {
    display: "flex",
    justifyContent: "center",
    //marginBottom: "200px"
  }
}))

function App() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.myBackground}>
        <div className={classes.myNav}>
          <img src={logo} alt="logo" className={classes.logo}/>
          <ToggleButton
            //color="#0A2463 "
            bordered={true}
            className={classes.toggleButtonNameAdmin}
          >
            Nom admin
          </ToggleButton>
        </div>
        <Form />
      </div>
    </ThemeProvider>);
}

export default App;





