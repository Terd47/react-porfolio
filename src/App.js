import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Portfolio from './pages/Portfolio';



function App() {
  return (
    <Router>
      <Home />
      <Switch>
        {/* <Route path='/' exact component={Home} />
        <Route path='/About' exact component={About} />
        <Route path='portfolio' exact component={Portfolio} />
        <Route path='/Contact' exact component={Contact} />
        <Route path='/skills' exact component={Skills} /> */}
      </Switch>
    </Router>
  );
}

export default App;