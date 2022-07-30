import React, {useEffect, useRef} from 'react';
import prof from '../prof.jpeg';
import {gsap} from "gsap";
export default function About() {

  const boxRef = useRef();

  useEffect (()=>{
    gsap.from(boxRef.current, { 
      x : 100,
      opacity: 0,
      delay: 1
    });
  })
  return (
    <div className="panel about" id='section2'>
      {/* <div className='switch-link'>
        <a className='subtitle'>SKILLS</a>
      </div> */}
      <div className='about-wrapper'>
        <div className='about-left'>
          <a className='subtitle'>ABOUT</a>
          <h3 className='title' ref={boxRef}>David Y.</h3>
          <p className='desc'>Task-oriented developer with a year of experience based in LA.
          I love to work with people to do things bigger than I could accomplish by myself.
          Challenging tasks motivate me and I'm looking for new challenging career experiences!</p>
        </div>
        <div className='about-right'>
          <div className='pic'>
            <div className='borders border1'></div>
            <div className='borders border2'></div>
            <img src={prof} alt="profile"/>
          </div>
        </div>
      </div>
    </div>
  );
}
