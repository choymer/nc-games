import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Reviews from './components/Reviews';
import ReviewById from './components/ReviewById';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Header />
     <Switch>
       <Route exact path="/reviews">
     <Reviews />
     </Route>
     <Route exact path="/reviews/categories/:categories">
     <Reviews />
     </Route>
     <Route exact path="/reviews/:review_id">
     <ReviewById />
     </Route>
     </Switch>
    </div>
  );
}

export default App;
