import '../App.css';
import React, {useState, useEffect} from 'react';
import Header from './Header';
import CarouselNavbar from './CarouselNavbar'
import Carousel from './Carousel'
import navigator from '../util/navigator';
function App() {
  useEffect(()=>{
    navigator();
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
