import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

import React from "react";
import Home from "./pages/Home/Home";
import About from "./components/About/About";
import Contact from './components/Contact/Contact';
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/Signup";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            {/* <Route path="/services" component={Services}/> */}
            <Route path="/about" component={About} />
            <Route path="/contact" exact component={Contact}/>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup}/>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
export default App;
