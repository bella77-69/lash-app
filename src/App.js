import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Index from './pages/404';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Nav from './components/Nav/Nav'
import Carousel  from './components/Carousel/Carousel';
import React from 'react';


const images = [
	'https://picsum.photos/400/300/?image=8',
	'https://picsum.photos/400/300/?image=92',
	'https://picsum.photos/400/300/?image=45',
	'https://picsum.photos/400/300/?image=23',
	'https://picsum.photos/400/300/?image=22',
	'https://picsum.photos/400/300/?image=21',
];


class App extends React.Component {
  render() {
  return (
    <div className="App">
      {/* <Router > */}
       
      <Header />
      <Nav />
      {/* <Switch > */}
      {/* <Route path="/" exact component={Home}/> */}
      <Hero />
      <Carousel images={images}/>
    <About />
    
    {/* </Switch> */}
    <Footer />
    {/* </Router> */}
    </div>
  );
}
}
export default App;
