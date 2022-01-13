import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Index from './pages/404';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Nav from './components/Nav/Nav'
function App() {
  return (
    <div className="App">
      {/* <Router > */}
       
      <Header />
      <Nav />
      {/* <Switch > */}
      {/* <Route path="/" exact component={Home}/> */}
      <Hero />
    <About />
    
    {/* </Switch> */}
    <Footer />
    {/* </Router> */}
    </div>
  );
}

export default App;
