import React, {useState, useEffect} from 'react';
import typeWriter from '../util/typeWriter';
export default function Domain() {
  useEffect(()=>{
    let targetLoc = document.querySelectorAll('.type-writer');
    // typeWriter(targetLoc, 100);
  }, [])
  return (
    <div className="panel domain" id='domain'>
      <p className='opening-tag'></p>
      <div className='title-wrapper'>
        <h1 className='type-writer'>Hello, </h1>
        <h1 className='type-writer'>I'm David</h1>
        <h1 className='type-writer'>Web Developer <span className="typing-cursor"></span></h1>
      </div>
      <p className='closing-tag'></p>
    </div>
  );
}
