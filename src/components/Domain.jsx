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
        <h1 className='type-writer'></h1>
      </div>

      <p className='closing-tag'></p>
    </div>
  );
}
