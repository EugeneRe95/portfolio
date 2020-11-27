import React from 'react'

function Resume() {
    return (
        <div id="resume">
            <div className="overlay"></div>
            <div className="container">
                <div className="item wow animate__animated animate__fadeInUpBig">
                    <h3>Education</h3>
                    <div className="body">
                        <ul>
                            <li>
                                <h4>University degree</h4>
                                <h5>Taras Shevchenko National University of Kyiv, Physics department, Kyiv</h5>
                                <p className="resume-date">September 2013 – August 2018</p>
                            </li>
                            <li>
                                <h4>University degree</h4>
                                <h5>Military Institute of Taras Shevchenko National University of Kyiv, Kyiv</h5>
                                <p className="resume-date">September 2017 – September 2018</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="item wow animate__animated animate__fadeInUpBig">
                    <h3>Experience</h3>
                    <div className="body">
                        <ul>
                            <li>
                                <h4>Front-end developer</h4>
                                <h5>NOVATIX LLC, Kyiv</h5>
                                <p className="resume-date">April 2020 - Current time</p>
                            </li>
                            <li>
                                <h4>Logistics manager</h4>
                                <h5>Self employed, Kyiv</h5>
                                <p className="resume-date">September 2018 - April 2020</p>
                            </li>
                            <li>
                                <h4>Project Manager</h4>
                                <h5>Modular glass system NEO LTD., Kyiv</h5>
                                <p className="resume-date">October 2017 – September 2018</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="resume-download-btn">
                <a href="https://drive.google.com/file/d/1mHRG08T32x61TVx_Zgv4oizzRnS536sY/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download resume</a>
            </div>
        </div>
    )
}

export default Resume
