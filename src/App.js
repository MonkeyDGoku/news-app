import './App.css';
import Router from './routes/router';
import 'bootstrap/dist/css/bootstrap.css';
import "./styles/index.css"
import Header from './components/header/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
