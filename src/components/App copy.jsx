// import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import React, {useState, useEffect} from 'react';
import Header from './Header';
import CarouselNavbar from './CarouselNavbar'
import About from './About';
import Contact from './Contact';

function App() {
    // useEffect(()=>{
    //     const navigators = document.querySelectorAll(".navigator");
    //     const panels = document.querySelectorAll(".panel");
        
    //     navigators.forEach((elem) => {
    //         elem.addEventListener("click", () => {
    //             let carouselIndex = 0;
    //             for (let i = 0; i < navigators.length; i++) {
    //                 if (elem == navigators[i]) {
    //                     carouselIndex = i;
    //                 }
    //             }
    //             panels[carouselIndex].scrollIntoView({ behavior: "smooth" });

    //         })
    //     })
    // })

  return (
      <section className='app'>
        <Header />
        <CarouselNavbar/>
        <Contact />
        <About />
        <Contact />
        <Contact />
        <Contact />
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
