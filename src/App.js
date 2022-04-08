import './App.css';
import { Students } from './components/students';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './components/Home';
import { MoviesList } from './components/MoviesList';

function App() {
  return (
    <div className="App">

      <Router>


        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/student-list">
            <Students name="Lorem" age="22" subject="English" />
            <Students name="Ipsum" age="20" subject="Tamil" />
            <Students name="Doler" age="25" subject="Spanish" />
            <Students name="Sit" age="18" subject="German" />
            <Students name="Amet" age="14" subject="Polish" />
          </Route>

          <Route path="/movies-list">
            <MoviesList />
          </Route>


        </Switch>


      </Router>


    </div>
  );
}

export default App;
