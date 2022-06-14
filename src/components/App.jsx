// import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from "./Header";
import React, {useState, useEffect} from 'react';
function App() {
    useEffect(()=>{
        const navigators = document.querySelectorAll(".navigator");
        const panels = document.querySelectorAll(".panel");
        
        navigators.forEach((elem) => {
            elem.addEventListener("click", () => {
                var scrollTo = 0;
                for (let i = 0; i < navigators.length; i++) {
                    if (elem == navigators[i]) {
                        scrollTo = i;
                    }
                }
                panels[scrollTo].scrollIntoView({ behavior: "smooth" });
            })
        })

    })
  return (
      <section className='app'>
          <Header 

          />
        <div className="well" id="well">
            <div className="panel navigate">
                <label>page1</label>
                <label>page2</label>
                <label>page3</label>
            </div>
            <div className="panel navigate">
            <label>page1</label>
                <label>page2</label>
                <label>page3</label>
            </div>
            <div className="panel navigate">
            <label>page1</label>
                <label>page2</label>
                <label>page3</label> </div>
            <div className="panel navigate">four</div>
            <div className="panel navigate">five</div>
        </div>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
        </header>
      </section>
  );
}

export default App;
