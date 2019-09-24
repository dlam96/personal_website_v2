import React, { Component } from 'react';

export class Resume extends Component {
    render() {
        return (
            <section id="resume" className="container border-top border-dark">
                <div className="row education">
                    <div className="col-md-3 header-col">
                        <h1><span>Education</span></h1>
                    </div>
                    <div className="col-md-9 main-col">
                        <div className="row item">
                            <div className="col-12">
                                <h3>University of Central Florida</h3>
                                <p className="info">Computer Science, Bachelors of Science. 
                                <span>&bull;</span><em className="date">Fall 2020</em></p>
                                <p className="info">Awards: UCF Scholar Award (Fall, Spring 2019), 
                                    Dean's List(Spring 2019, Fall 2018)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row education">
                    <div className="col-md-3 header-col">
                        <h1><span>Selected Projects</span></h1>
                    </div>
                    <div className="col-md-9 main-col">
                        <div className="row item">
                            <div className="col-12">
                                <h3>Contacts List Web Application</h3>
                                <p className="info">(09/2019 – Present)</p>
                                <ul className="info">
                                    <li >Building the backend API for 
                                    Processes of Object-Oriented Software Design (COP 4331).</li>
                                    <li>API able to login/register users and allow users to 
                                        add/delete/edit contact lists.</li>
                                    <li>MySQL used as server and deployed on DigitalOcean.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row item">
                            <div className="col-12">
                                <h3>Full-stack website </h3>
                                <p className="info">(08/2019 – Present)</p>
                                <ul className="info">
                                    <li >Creating a full-stack dynamic website with React and ExpressJS for Rak Law Firm.</li>
                                    <li>Used MongoDB as the database and deployed to Heroku.</li>
                                    <li>Reference: Attorney Ramil Kaminsky <br/> Tell: (813) 748-3373 <span>&bull;</span> Email: ramil@ramilkanminskylaw.com</li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="row item">
                            <div className="col-12">
                                <h3>User Login/Register Backend API</h3>
                                <p className="info">(07/2019)</p>
                                <ul className="info">
                                    <li>Made a backend API in ExpressJS using MongoDB to store user information. </li>
                                    <li>Used PassportJS and Express-Session to keep track of active user sessions.</li>
                                    <li>Front-end was made with PugJS template engine.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row item">
                            <div className="col-12">
                                <h3>Premier league Table Web Scraper</h3>
                                <p className="info">(07/2019)</p>
                                <ul className="info">
                                    <li>Built a web scraper using Selenium WebDriver in Python to 
                                        scrape data of the premier league football season standings.</li>
                                    <li>Used NumPy and Pandas to load values into a data frame 
                                        with option to export into a csv file for further data analysis.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row education">
                    <div className="col-md-3 header-col">
                        <h1><span>Technical skills</span></h1>
                    </div>
                    <div className="col-md-9 main-col">
                        <div className="item">
                            <div>
                                <h3>Programming Languages</h3>
                                <p className="info">C/C++ 
                                &bull;Java
                                &bull;Python
                                &bull;JavaScript
                                &bull;HTML/CSS</p>
                            </div>
                            <div>
                                <h3>Libraries & FrameWorks</h3>
                                <p className="info">React 
                                &bull;Angular
                                &bull;ExpressJS
                                &bull;PassportJS
                                &bull;PugJS</p>
                            </div>
                            <div>
                                <h3>Tools & Platform</h3>
                                <p className="info">Git 
                                &bull;Heroku
                                &bull;Linux
                                &bull;NodeJS
                                &bull;MongoDB
                                &bull;MySQL</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;
