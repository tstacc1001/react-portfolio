// import React from 'react';
import logo from '../logo.svg';
import '../App.css';
// import React from 'react';
export default function Header() {

    function navigateTo(event){
        console.log(event.target.innerText);
    }

  return (
      <header className='header-wrapper'>
          <div className='header'>
            <div className='logo-wrapper'>
                <p>DAVID<span>YOON</span></p>
            </div>
            <div>
                <ul>
                    <li onClick={navigateTo} className='navigator'>ABOUT</li>
                    <li onClick={navigateTo} className='navigator'>WORK</li>
                    <li onClick={navigateTo} className='navigator'>CONTACT</li>
                </ul>
            </div>

          </div>
      </header>
  );
}
