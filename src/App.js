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
import { Universities } from './components/Universities';
import { Countries } from './components/Countries';
import About from './About';
import ButtonPageUi from './components/ButtonDisablePage';
import BootstrapLoginForm from './components/React-bootstrap/LoginForm';

function App() {




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
            <MoviesList />
          </Route>

          <Route path="/universities">
            <Universities />
          </Route>

          <Route path="/country-list">
            <Countries />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/button-page">
            <ButtonPageUi />
          </Route>

          <Route path="/login-form">
            <BootstrapLoginForm />
          </Route>



        </Switch>


      </Router>


    </div>
  );
}

export default App;
