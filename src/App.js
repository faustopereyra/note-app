import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";


import HomePage from './layouts/homepage/homepage.component';
import SignInPage from './layouts/sign-in-page/SignInPage.component';
import SignUpPage from './layouts/sign-up-page/SignUpPage.component';

import { auth, createUserProfileDocument } from "./firebase/firebase.util"
import { setCurrentUser } from "./redux/user/user.actions"



class App extends React.Component {
  /*constructor() {
    super()

    //set up state with default values
    this.state = {
      currentUser: null
    };
  };*/

  unsubscribeFromAuth = null;

  //Add user to db if it dont exist and add it to the user reducer
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
          console.log(setCurrentUser);
        });
      }

      setCurrentUser(userAuth);

      //console.log(user)
    });
  }

  //prevent user leak
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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(
  null,
  mapDispatchToProps
)(App);
