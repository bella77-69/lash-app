import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import UserContext from "./context/userContext";
import Home from "./pages/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
// import Login from "./pages/Login/Login";
import Login from "./components/Auth/Login";

import Register from "./components/Auth/Register";
import Services from "./components/Services/Services";
import BookingForm from "./components/Booking/BookingForm";
import ResetPassword from "./pages/Login/ResetPassword";
import Classic from "./pages/Services/Classic";
import Hybrid from "./pages/Services/Hybrid";
import Volume from "./pages/Services/Volume";
import Russian from "./pages/Services/Russian";
import Faq from "./components/FAQ/Faq";
import Waiver from "./components/Waiver/Waiver";
import Price from "./components/Price/Price"


function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenResponse.data) {
        const userRes = await axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkLoggedIn();
  }, []);
    return (
      <div className="App">
        <Router>
        <UserContext.Provider value={{ userData, setUserData }}>
          {/* <Header /> */}
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
            <Route path="/book-appointment" exact component={BookingForm} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/waiver"exact component={Waiver}/>
            <Route path="/reset-password" exact component={ResetPassword}/>
          </Switch>
          <Footer />
          </UserContext.Provider>
        </Router>
      </div>
    );
  }

export default App;
