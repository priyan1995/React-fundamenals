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


  const movieList = [
    { id: 1, Title: "John Wick", IMDB: 6 },
    { id: 2, Title: "Equalizer", IMDB: 5.5 },
    { id: 3, Title: "Real Steel", IMDB: 6.7 },
    { id: 4, Title: "Harry Potter", IMDB: 4.8 },
    { id: 5, Title: "Lord of the Rings", IMDB: 5.2}
  ]

  return (
    <div className="App">

      <Router>


        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/student-list">
          <h2>Student List (Individual Props)</h2>
            <Students name="Lorem" age="22" subject="English" />
            <Students name="Ipsum" age="20" subject="Tamil" />
            <Students name="Doler" age="25" subject="Spanish" />
            <Students name="Sit" age="18" subject="German" />
            <Students name="Amet" age="14" subject="Polish" />
          </Route>

          <Route path="/movies-list">
            <MoviesList movies = {movieList} />
          </Route>


        </Switch>


      </Router>


    </div>
  );
}

export default App;
