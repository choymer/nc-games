import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Reviews from './components/Reviews';
import ReviewById from './components/ReviewById';
import UserList from './components/UserList';
import User from './components/User'
import { useState } from 'react';
import { UserContext } from './contexts/User';

function App() {

  const [user, setUser] = useState (  {
    username: "jessjelly",
    avatar_url: "Jess Jelly",
    name: "https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg"
  })

  return (
    <UserContext.Provider value={{user}}>
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
          <Route exact path="/users/:username">
            <User />
          </Route>
     </Switch>
    </div>
    </UserContext.Provider>
  );
}

export default App;
