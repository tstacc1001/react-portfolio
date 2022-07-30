import React, { useEffect } from 'react';

export default function Projects() {

    return (
        <div className="panel work" id='section3'>
            <h3 className='subtitle'>WORK</h3>
            <div className='project-header'>
                <h3 className='title'>Featured Projects</h3>
            </div>
            <div className='project-wrapper'>
                <div className='project'>
                <div className='project-img color1'></div>
                <h3 className='project-category'>mobile, design</h3>
                <h3 className='project-title'>Bright Yellow</h3>
                </div>
                <div className='project'>
                <div  className='project-img color2' ></div>
                <h3 className='project-category'>illustration, web</h3>
                <h3 className='project-title'>Bright Pink</h3>
                </div>
                <div className='project'>
                <div  className='project-img color3' ></div>
                <h3 className='project-category'>vector, design, online</h3>
                <h3 className='project-title'>Bright Blue</h3>
                </div>
                <div className='project'>
                <div  className='project-img color4' ></div>
                <h3 className='project-category'>web, design</h3>
                <h3 className='project-title'>Bright Green</h3>
                </div>
            </div>
        </div>
    );
}