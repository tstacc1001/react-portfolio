import React from 'react';
import prof from '../prof.jpeg';

export default function About() {

  return (
    <div className="panel about" id='section2'>
      <div className='about-wrapper'>
        <div className='about-left'>
          <div className='pic'>
            <img src={prof} alt="profile" />
          </div>
        </div>
        <div className='about-right'>
          <h1>ABOUT</h1>
          <h3>NAME</h3>
          <p>Task-oriented developer with a year of experience based in LA.
          I love to work with people to do things bigger than I could accomplish by myself.
          Challenging tasks motivate me and I'm looking for new challenging career experiences!</p>
        </div>
      </div>
    </div>
  );
}
