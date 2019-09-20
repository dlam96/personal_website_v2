import React, { Component } from 'react';

export class About extends Component {
    render() {
        return (
            <section id="about" >
                <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <img className="profile-pic"  src="/images/profilepic.jpeg" alt="Daniel Lam Profile Pic" />
                    </div>
                    <div className="col-md-8 col-sm-12">
                        <h2>About Me</h2>
                        <p>I am currently a senior Computer Science student at the University of Florida. 
                            I have experiences in the React, ExpressJS, MySQL, and MongoDB</p>
                        <p>
                        <br />
                        <h2>Contact Details</h2>
                            <span>Daniel Lam</span><br />
                            <span>5012 Creekside Park Ave<br />
                                Orlando FL, 32811
                            </span><br />
                            <span>407-371-9397</span><br />
                            <span>dlam96@knights.ucf.edu</span>
                        </p>
                    </div>
                </div>
                
            </section>
        );
    }
}

export default About;
