import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Reviews from './components/Reviews';
import ReviewById from './components/ReviewById';
import UserList from './components/UserList';

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
     <Route exact path="/reviews/:review_id/comments">
     <ReviewById />
     </Route>
     <Route exact path="/users">
     <UserList />
     </Route>
     </Switch>
    </div>
  );
}

export default App;
