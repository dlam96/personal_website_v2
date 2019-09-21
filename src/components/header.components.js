import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return ( 
            <section id="home" className="cover text-center">
                <nav className="navbar navbar-expand-lg  fixed-top">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse pull-xs-center justify-content-center" id="navbarSupportedContent">
                        <ul id="nav" className="navbar-nav nav navbar-center">
                            <li className="nav-item current">
                                <a className="nav-link smoothscroll" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link smoothscroll" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link smoothscroll" href="#resume">Resume</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#link">Works</a>
                            </li> */}
                            <li className="nav-item">
                                <a className="nav-link smoothscroll" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <section className="container" id="home">
                    <div className="banner">
                        <div className="banner-text">
                            <h1>Daniel Lam</h1>
                            <h3>I'm a senior Computer Science student at the University of Central Florida.</h3>
                            <h3> My main interests are in
                                full-stack web development.</h3>
                            <ul className="social">
                                <li> <a className="fa fa-facebook" rel="noopener noreferrer" target="_blank" href="https://facebook.com/profile.php?id=100023953854302"></a></li>
                                <li> <a className="fa fa-github" rel="noopener noreferrer" target="_blank" href="https://github.com/dlam96"></a></li>
                                <li> <a className="fa fa-linkedin" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/dlam96/"></a></li>
                                <li> <a className="fa fa-envelope" rel="noopener noreferrer" target="_blank" href="mailto: dlam96@knights.ucf.edu"></a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}