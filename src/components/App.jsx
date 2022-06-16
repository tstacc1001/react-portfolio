// import React from 'react';
import logo from '../logo.svg';
import '../App.css';
// import React, {useState, useEffect} from 'react';
import Header from './Header';
import CarouselNavbar from './CarouselNavbar'
import Carousel from './Carousel'

function App() {


  return (
      <section className='app'>
        <Header />
        <CarouselNavbar/>
        <Carousel />
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
        </header>
      </section>
  );
}

export default App;
