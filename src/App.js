import './App.css';
import { Students } from './components/students';

function App() {
  return (
    <div className="App">
      <Students name="Lorem" age="22" subject="English" />
      <Students name="Ipsum" age="20" subject="Tamil" />
      <Students name="Doler" age="25" subject="Spanish" />
      <Students name="Sit" age="18" subject="German" />
      <Students name="Amet" age="14" subject="Polish" />
    </div>
  );
}

export default App;
