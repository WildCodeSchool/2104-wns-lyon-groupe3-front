import './App.css';
import theme from "./styles/theme";
import { ThemeProvider } from '@material-ui/core/styles';
import ProfessorForm from './components/ProfessorForm';
import HomePage from './components/HomePage';
import Agenda from './components/Agenda';
import ProfSettings from './components/ProfSettings';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/professorform' component={ProfessorForm} />
          <Route path='/agenda' component={Agenda} />
          <Route path='/profsettings' component={ProfSettings} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;


