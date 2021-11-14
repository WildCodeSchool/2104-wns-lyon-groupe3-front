import './App.css';
import './styles/neumorphism.css';
import 'ui-neumorphism/dist/index.css';

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import ConnexionPage from './pages/ConnexionPage';
import HomePage from './pages/HomePage';
import ProfSettings from './components/ProfSettings';
import ProfessorForm from './components/ProfessorForm';
import StudentForm from './components/StudentForm';
import { ThemeContext } from './ThemeProvider';
import { makeStyles } from "@material-ui/core";
import theme from "./styles/theme";
import { useContext } from 'react';

// import { ThemeProvider } from '@material-ui/core/styles';

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

const App: React.FC = () => {

  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* <ThemeProvider theme={theme}> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ConnexionPage} />
          <Route exact path="/home" component={HomePage} />
          {/* <Route path='/professorform' component={ProfessorForm} />
          <Route path='/profsettings' component={ProfSettings} />
          <Route exact path="/admin" component={HomePage} />
          <Route exact path="/admin/student" component={StudentPage} /> */}
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
      {/* </ThemeProvider> */}
    </ThemeContext.Provider>
  );
}
export default App;
