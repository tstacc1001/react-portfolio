import React, {useState, useEffect, useLayoutEffect} from 'react';
import typeWriter from '../util/typeWriter';
export default function Domain() {

  useEffect(() => {
    typeWriter();
  },[]);
  return (
    <div className="panel domain" id='section1'>
      <p className='opening-tag'></p>
      <div className='title-wrapper'>
        <h1 className='typer-area'><span className='type-writer'></span></h1>
      </div>
      <p className='closing-tag'></p>
    </div>
  );
}
