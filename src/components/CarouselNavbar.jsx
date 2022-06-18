import React from 'react';
import '../App.css';
import {Link} from 'react-scroll';


export default function CarouselNavbar() {

  return (
      <div className="carousel-nav">
        <ul >
            <Link className='navigator' to='domain' smooth={true} duration={500} ignoreCancelEvents={true}></Link>
            <Link className='navigator' to='about' smooth={true} duration={500} ignoreCancelEvents={true}></Link>
            <Link className='navigator 'to='work' smooth={true} duration={500} ignoreCancelEvents={true}></Link>
            <Link className='navigator 'to='contact' smooth={true} duration={500} ignoreCancelEvents={true}></Link>
            <Link className='navigator 'to='footer' smooth={true} duration={500} ignoreCancelEvents={true}></Link>
        </ul>
      </div>
  );
}
