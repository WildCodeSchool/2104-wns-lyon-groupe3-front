import React from 'react';
import logo from './assets/logoRemotab.png';
//import './App.css';
import theme from "./styles/theme";
import { makeStyles } from "@material-ui/core"
import { ThemeProvider } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import 'ui-neumorphism/dist/index.css'

import './styles/neumorphism.css'
//import {  BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import StudentPage from './pages/StudentForm';
import Form from './components/Form'

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
  },
  exitButton: {
    fontSize: "30px",
    color: "#FE5F55"
  },
  myDivExitButton: {
    top: "20px",
    left: "80px",
    height: "50px",
    width: "160px",
    display: "flex",
    position: "absolute",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  mySpan: {
    fontStyle: "italic",
    color: "#0A2463"
  }
}))

function App() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      {/* <Router> */}
      <div className={classes.myBackground}>
        <div className={classes.myNav}>
          <div className={classes.myDivExitButton}>
            <span className={classes.mySpan}>Se déconnecter</span>
            <ExitToAppIcon  className={classes.exitButton}/>
          </div>
            
          <img src={logo} alt="logo" className={classes.logo}/>
          <button
            //color="#0A2463 "
            //bordered={true}
            className="toggleButtonNameAdmin"
          >
          <span className={classes.mySpan}>Nom admin</span>
          </button>
        
        </div>
        <Form />
      </div>


        {/* <Switch>
         <Route path="/studentForm" component={StudentPage}/>
        </Switch> */}
        
{/*        
      </Router> */}
    </ThemeProvider>);
}

export default App;





