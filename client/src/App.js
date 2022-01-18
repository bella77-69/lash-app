import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

import React from "react";
import Home from "./pages/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/Signup";
import Services from "./components/Services/Services";
import BookingForm from "./components/Booking/BookingForm";
import ResetPassword from "./pages/Login/ResetPassword";
import Classic from "./pages/Services/Classic";
import Hybrid from "./pages/Services/Hybrid";
import Volume from "./pages/Services/Volume";
import Russian from "./pages/Services/Russian";
import Lift from "./pages/Services/Lift";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" exact component={Services} />
            <Route path="/services/classic" exact component={Classic} />
            <Route path="/services/hybrid" exact component={Hybrid} />
            <Route path="/services/volume" exact component={Volume} />
            <Route path="/services/russian" exact component={Russian} />
            <Route path="/services/lift" exact component={Lift}/>
            <Route path="/about" exact component={About} />
            <Route path="/book-appointment" exact component={BookingForm} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/login" exact component={Login} />
            <Route path="/reset-password" component={ResetPassword} />
            <Route path="/signup" exact component={Signup} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
export default App;
