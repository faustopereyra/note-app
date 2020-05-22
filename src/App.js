import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";


import HomePage from './layouts/homepage/homepage.component';
import SignInPage from './layouts/sign-in-page/SignInPage.component';
import SignUpPage from './layouts/sign-up-page/SignUpPage.component';

import { auth } from "./firebase/firebase.util"



class App extends React.Component {
  constructor() {
    super()

    //set up state with default values
    this.state = {
      currentUser: null
    };
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

      console.log(user)
    });
  }

  componentWillUnmunt() {
    this.unsubscribeFromAuth();
  }

S

  render() {
    return (
      <div>

        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/signin' component={SignInPage} />
          <Route path='/signup' component={SignUpPage} />
        </Switch>
      </div>
    )
  }

}

export default App;
