import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import firebase, { auth, provider } from './firebase.js';
import axios from "./axios-homestays";
import Header from "./components/Header";
import Selected from "./components/Selected";
import Homestays from "./components/Homestays";
import Homestay from "./components/Homestay";
import Main from "./components/Main";
import Profile from "./components/Profile";
import description from "./data.js";

class App extends Component {
  constructor() {
    super();
    this.saveItem = this.saveItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.state = {
      description: description,
      selected: [],
      selectedOne: null,
      modalVisible: false,
      user: null,
      menuIsShown: false,
    };
  }
  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });

  }
  login() {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
      });

  }
  saveItem(id) {
    const { description } = this.state;
    let selectedItem = description.filter((currentItem, index) => {
      return id === index;
    });

    this.setState(prevState => ({
      selected: [...prevState.selected, ...selectedItem]
    }));
    const selected = id;
    axios.post("/selected/" + this.state.user.providerData[0].uid + ".json", selected)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
  removeItem (id) {
    let { selected } = this.state;
    let removed = selected.filter((currentItem) => {
      return currentItem.id !== id;
    });
    this.setState({ selected: removed });
    // axios.delete("/selected/" + this.state.user.providerData[0].uid + ".json/" + key + id)
    //   .then(response => console.log(response))
    //   .catch(error => console.log(error));
  };
  showMenu () {
    this.setState(prevState => ({
      menuIsShown: !prevState.menuIsShown
    }))
  }
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({user});
        console.log(user.providerData[0].uid);
      }
    })
  }

  render() {
    return (
      <Router>

        <Route
          path="/"
          exact
          render={props => (
            this.state.user ?
              <Redirect to="/homestays" />
            :
            <div>
            <Main onClick={this.login} user={this.state.user}/>
            </div>
          )}

        />
        <Route
          path="/homestays"
          exact
          render={props => (
            this.state.user ?
            <div>
            <Header
              isShown={this.state.menuIsShown}
              onClickMenu={this.showMenu}
              onClick={this.logout}
              profilePhoto={this.state.user.photoURL}
              userName={this.state.user.displayName}/>
            <Homestays
              {...props}
              profilePhoto={this.state.user.photoURL}
              description={this.state.description}
              length={this.state.description.length}
              onClick={this.saveItem}
              username={this.state.user.displayName}
            />
            </div>
            : <Redirect to="/" />
          )}
        />
        <Route
          path="/favourites"
          exact
          render={props => (
              this.state.user ?
              <div>
              <Header
              isShown={this.state.menuIsShown}
              onClickMenu={this.showMenu}
              onClick={this.logout}
              profilePhoto={this.state.user.photoURL}
              userName={this.state.user.displayName}
              />
            <Selected
              {...props}
              description={this.state.selected}
              length={this.state.selected.length}
              onClick={this.removeItem}
            />
            </div>
            : <Redirect to="/" />
          )}
        />
        <Route
          path="/profile"
          exact
          render={props => (
              this.state.user ?
              <div>
              <Header
              isShown={this.state.menuIsShown}
              onClickMenu={this.showMenu}
              onClick={this.logout}
              profilePhoto={this.state.user.photoURL}
              userName={this.state.user.displayName}
              />
            <Profile
              {...props}
              userName={this.state.user.displayName}
              profilePhoto={this.state.user.photoURL}
              email={this.state.user.email}
              onClick={this.logout}
            />
            </div>
            : <Redirect to="/" />
          )}
        />
      <Route
        path="/homestay/:id"
        exact
        component={Homestay}
        />
    </Router>
    );
  }
}

export default App;
