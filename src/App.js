import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NotFound from './pages/404/NotFound';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Nav from './components/Nav/Nav'
import Carousel  from './components/Carousel/Carousel';
import React from 'react';
import Home from './pages/Home/Home';

const images = [
	'img-01.jpg',
	'img-02.jpg',
	'img-03.jpg',
	'img-04.jpg',
	'img-05.jpg',
	'img-06.jpg',
];

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <Router >
       
      <Header />
      <Nav />
      <Switch>
      <Route path="/"exact component={Home}/>
      {/* <Switch > */}
      {/* <Route path="/" exact component={Home}/> */}
      {/* <Hero />
      <Carousel images={images}/>
    <About /> */}
    
    </Switch>
    <Footer />
    </Router>
    </div>
  );
}
}
export default App;
