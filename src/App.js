import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import LeagueContainer from './components/LeagueContainer/LeagueContainer';
import LeagueDetails from './components/LeagueDetails/LeagueDetails';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
            <LeagueContainer></LeagueContainer>
          </Route>
          <Route path="/leagues/:id">
            <LeagueDetails></LeagueDetails>
          </Route>
          <Route path="/home">
            <Home></Home>
            <LeagueContainer></LeagueContainer>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
