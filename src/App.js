import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Header />
     <Switch>
       <Route exact path="/reviews">
     <Reviews />
     </Route>
     </Switch>
    </div>
  );
}

export default App;
