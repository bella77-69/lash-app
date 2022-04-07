import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import BookingModal from "./components/Booking/BookingModal";
import Services from "./components/Services/Services";
import Classic from "./pages/Services/Classic";
import Hybrid from "./pages/Services/Hybrid";
import Volume from "./pages/Services/Volume";
import Russian from "./pages/Services/Russian";
import Faq from "./components/FAQ/Faq";
import Waiver from "./components/Waiver/Waiver";
import Price from "./components/Price/Price"
import BookingPage from "./pages/Booking/BookingPage";

function App() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Switch>
             <Route path="/" exact component={Home} /> 
            <Route path="/services" exact component={Services} />
            <Route path="/services/classic" exact component={Classic} />
            <Route path="/services/hybrid" exact component={Hybrid} />
            <Route path="/services/volume" exact component={Volume} />
            <Route path="/services/russian" exact component={Russian} />
            <Route path="/services/faq" exact component={Faq}/>
            <Route path="/prices" exact component={Price}/>
            <Route path="/about" exact component={About} />
            <Route path="/book-appointment" exact component={BookingPage} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/modal" exact component={BookingModal} />
            <Route path="/waiver"exact component={Waiver}/>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }

export default App;
