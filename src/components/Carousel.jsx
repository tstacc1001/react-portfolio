import React from 'react';
import About from './About';
import Contact from './Contact';
import Domain from './Domain';
import Work from './Work';

export default function Carousel() {

  return (
    <section className="carousel">
        <Domain />
        <About />
        <Work />
        <Contact />
    </section>
  );
}
