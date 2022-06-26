import React from 'react';
import '../App.css';


export default function Header() {

    function navigateTo(event){
        console.log(event.target.innerText);
    }

  return (
      <header className='header-wrapper'>
          <div className='header'>
            <div className='logo-wrapper' >
                <p id='sectionLink1'>DAVID<span>Y.</span></p>
                
            </div>
            <div>
                <ul>
                    <a id='sectionLink2' className='link' >ABOUT</a>
                    <a id='sectionLink3' className='link' >WORK</a>      
                    <a id='sectionLink4' className='link' >CONTACT</a>
                </ul>
            </div>
          </div>
      </header>
  );
}
