import React, {useState, useEffect} from 'react';
import typeWriter from '../util/typeWriter';
export default function Domain() {
  useEffect(()=>{
    typeWriter();
  }, [])
  return (
    <div className="panel domain" id='section1'>
      <p className='opening-tag'></p>
      <div className='title-wrapper'>
        <h1 className='type-writer'>Hello, </h1>
        <h1 className='type-writer'>I'm David</h1>
        <h1 className='type-writer'>Web Developer <span className="typing-cursor"></span></h1>
      </div>
      <div className='shit'></div>
      <p className='closing-tag'></p>
    </div>
  );
}
