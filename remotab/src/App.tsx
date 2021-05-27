import React from 'react';
// import logo from './assets/logoRemotab.png';
import './App.css';
import theme from "./styles/theme";
import { ThemeProvider } from '@material-ui/core/styles';
import ProfessorForm from './components/ProfessorForm';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Palette } from '@material-ui/icons';



function App() {  

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/professorform' component={ProfessorForm} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;


