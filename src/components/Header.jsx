import React from 'react';
import '../App.css';
import {Link, animateScroll as scroll} from 'react-scroll';

export default function Header() {

    function navigateTo(event){
        console.log(event.target.innerText);
    }

  return (
      <header className='header-wrapper'>
          <div className='header'>
            <div className='logo-wrapper' >
                <p onClick={()=> scroll.scrollToTop()}>DAVID<span>Y.</span></p>
            </div>
            <div>
                <ul>
                    <Link className='link' to='about' smooth={true} duration={500} ignoreCancelEvents={true}>ABOUT</Link>
                    <Link className='link' to='work' smooth={true} duration={500} ignoreCancelEvents={true}>WORK</Link>
                    <Link className='link' to='contact' smooth={true} duration={500} ignoreCancelEvents={true}>CONTACT</Link>
                </ul>
            </div>
          </div>
      </header>
  );
}
