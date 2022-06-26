import React from 'react';
import '../App.css';



export default function CarouselNavbar() {

  return (
      <div className="carousel-nav">
        <ul >
            <a className='navigator' id='sectionLink1'></a>
            <a className='navigator ' id='sectionLink2'></a>
            <a className='navigator' id='sectionLink3'></a>
            <a className='navigator' id='sectionLink4'></a>
        </ul>
      </div>
  );
}
