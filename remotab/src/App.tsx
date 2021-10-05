
import './App.css';
import theme from "./styles/theme";
import './styles/neumorphism.css';
import 'ui-neumorphism/dist/index.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from "@material-ui/core";
import ProfessorForm from './components/ProfessorForm';
import HomePage from './components/HomePage';
import Agenda from './components/Agenda';
import StudentPage from './pages/StudentForm';
import ConnexionPage from './pages/ConnexionPage';
import AdminPage from './pages/AdminPage';
import ProfSettings from './components/ProfSettings';
import { BrowserRouter as BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

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
          <Route exact path='/'><HomePage /></Route>
         // <Route exact path="/home" component={HomePage} />
          <Route path='/professorform' component={ProfessorForm} />
          <Route path='/agenda' component={Agenda} />
          <Route path='/profsettings' component={ProfSettings} />
           <Route exact path="/" component={ConnexionPage} />
          <Route exact path="/admin" component={AdminPage} />
          <Route exact path="/admin/student" component={StudentPage} />
        <Redirect to="/" />
        </Switch>
      </BrowserRouter>  
    </ThemeProvider>
  );
}

export default App;