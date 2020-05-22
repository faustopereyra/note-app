import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";


import HomePage from './layouts/homepage/homepage.component';
import SignInPage from './layouts/sign-in-page/SignInPage.component';
import SignUpPage from './layouts/sign-up-page/SignUpPage.component';



class App extends React.Component {
  constructor() {
    super()

    //set up state with default values
    this.state = {
      currentUser: null
    };
  };

  componentDidMount() {
    //Load Notes
  }



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
