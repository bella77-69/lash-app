import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

import React from "react";
import Home from "./pages/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import AppLogin from "./pages/Login/AppLogin";
// import Signup from "./pages/Login/Signup";
import Services from "./components/Services/Services";
import BookingForm from "./components/Booking/BookingForm";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            {/* <Route path="/services" exact component={Services} /> */}
            <Route path="/about" exact component={About} />
            <Route path="/book-appointment" exact component={BookingForm} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/login" exact component={AppLogin} />
            {/* <Route path="/signup" exact component={Signup} /> */}
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
export default App;
