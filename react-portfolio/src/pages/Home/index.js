import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hero from '../../Components/Hero';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import About from '../../Components/About';
import Skills from '../../Components/Skills';
import Contact from '../../Components/Contact';
import ScrollToTop from '../../Components/ScrollToTop';
import Project from '../../Components/Project';

function Home() {
  return (
    <>
    <Router>
    <ScrollToTop />
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Skills />
      <Contact />
      {/* <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/About' exact component={About} />
        <Route path='/portfolio' exact component={Portfolio} />
        <Route path='/Contact' exact component={Contact} />
        <Route path='/skills' exact component={Skills} />
      </Switch> */}
      <Footer />
      </Router>
    </>
  );
}

export default Home;