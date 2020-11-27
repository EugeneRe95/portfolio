import React, {useEffect} from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import SmoothScroll from 'smooth-scroll'
import WOW from 'wow.js'

import "./App.scss";

import About from "./components/About";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Sidebar from "./components/Sidebar";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import ProjectsHome from "./components/ProjectsHome";
import Projects from './components/Projects'
import AboutProject from './components/AboutProject'
import ScrollToTop from './components/ScrollToTop'
import "@fortawesome/fontawesome-free/css/all.css";

import "animate.css";
import Contacts from "./components/Contacts";

function App() {
  useEffect(() => {
    new SmoothScroll('a[href*="#"]', {
      speed: 600,
      updateURL: false,
      offset: (window.innerWidth < 700)
        ? 0
        : 80
    });
    new WOW().init({animateClass: 'animate__animated'});
  })
  return (
    <Router basename="/portfolio">
      <Sidebar/>
      <Menu/>
      <div id="main-wrapper">
              <Route exact path="/">
                <Home/>
                <About/>
                <Resume/>
                <Skills/>
                <ProjectsHome/>
              </Route>
              <ScrollToTop>
                <Route exact path="/projects" component={Projects}/>
                <Route exact path="/projects/:id" render={(globalStore, props)=> <AboutProject globalStore={globalStore}{...props}/>}/>
                <Route exact path="/contacts" component={Contacts}/>
              </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
