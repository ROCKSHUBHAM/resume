import React from 'react';
import Navbar from './navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Services from './Services';
import Contact from './Contact';
import Come from './Come';
import Project from './project';
function App() {
  return (
    <>
      <div className="vh-100 ">
        <Navbar />
        <div className="h-100 pt-5">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/skills" component={Skills}></Route>
            <Route exact path="/services" component={Services}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route exact path="/project" component={Project}></Route>
            <Route exact path="/come" component={Come}></Route>
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
