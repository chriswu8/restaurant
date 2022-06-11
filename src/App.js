import React from 'react';
import { AboutUs, Chef, Owner, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar, Map } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Owner />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Map />
    <Footer />
  </div>
);

export default App;
