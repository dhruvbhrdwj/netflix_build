import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { auth } from './firebase';
import HomeScreen from './screens/HomeScreen.js'
import Login from './screens/LoginScreen.js'
import { login, logout } from './features/counter/userSlice';

function App() {
  const user = null;
  const dispatch= useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
        uid: userAuth.id,
        email: userAuth.email,
        })
        );
      }
      else {
        //logged out
        dispatch(logout());
      }
    });
    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <div className="app"> 
      <Router>
        {!user ? (
          <Login />
        ) : (
        <Switch>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
