import React from 'react';

import '../App.css';
// import React, {useState, useEffect} from 'react';
import Header from './Header';
import CarouselNavbar from './CarouselNavbar'
import Carousel from './Carousel'
import { useEffect } from 'react';

function App() {
  return (
      <section className='app'>
        <Header />
        <CarouselNavbar/>
        <Carousel />
        
      </section>
  );
}

export default App;
