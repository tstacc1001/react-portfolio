import '../App.css';
import React, {useState, useEffect} from 'react';
import Header from './Header';
import CarouselNavbar from './CarouselNavbar'
import Carousel from './Carousel'
import scroll from '../util/scroll';
import typeWriter from '../util/typeWriter';
function App() {
  useEffect(()=>{
    scroll();
  }, [])
  return (
      <section className='app'>
        <Header />
        <CarouselNavbar />
        <Carousel />
      </section>
  );
}

export default App;
