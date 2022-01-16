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
import Services from "./components/Services/Services";
import AppointmentDetails from "./components/Appointment/AppointmentDetails";
import Appointment from "./components/Appointment/Appointment";
import { Provider } from 'react-redux';
import store from './store.js';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
        <Provider store={store}>
          <Header />
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" exact component={Services}/>
            <Route path="/about" exact component={About} />
         
        <Switch>
          <Route path="/:date/:month/:year/:timeFrom/details" component={AppointmentDetails}/>
          <Route path="/:date?/:month?/:year?/" component={Appointment}/>
        </Switch>
     

            {/* <Route path="/:date?/:month?/:year?/" component={Appointment}/>
            
          <Route path="/:date/:month/:year/:timeFrom/details" component={AppointmentDetails}/> */}
            {/* <Route ptah="/book-appointment" exact component={Booking}/> */}
            <Route path="/contact" exact component={Contact}/>
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup}/>
          </Switch>
          <Footer />
          </Provider>
        </Router>
      </div>
    );
  }
}
export default App;
