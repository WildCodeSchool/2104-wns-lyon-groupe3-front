import React from 'react';
import theme from "./styles/theme";
import { makeStyles } from "@material-ui/core"
import { ThemeProvider } from '@material-ui/core/styles';
import 'ui-neumorphism/dist/index.css'

import './styles/neumorphism.css'
import {  BrowserRouter, Redirect, Route,Switch } from 'react-router-dom';
import StudentPage from './pages/StudentForm';
import ConnexionPage from './pages/ConnexionPage';
import AdminPage from './pages/AdminPage';
import HomePage from './components/HomePage';


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

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter> 
        <Switch>
          <Route exact path="/" component={ConnexionPage} />
          <Route exact path="/admin" component={AdminPage} />
          <Route exact path="/admin/student" component={StudentPage} />
          <Route exact path="/home" component={HomePage} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>  
    </ThemeProvider>
  );
}

export default App;





