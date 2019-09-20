import React, { Component } from 'react';

export class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="row footdiv">
                    <div className="col-md-12">
                            <ul className="social-links">
                                <li> <a className="fa fa-facebook" rel="noopener noreferrer" target="_blank" href="https://facebook.com/profile.php?id=100023953854302"></a></li>
                                <li> <a className="fa fa-github" rel="noopener noreferrer" target="_blank" href="https://github.com/dlam96"></a></li>
                                <li> <a className="fa fa-linkedin" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/dlam96/"></a></li>
                                <li> <a className="fa fa-envelope" rel="noopener noreferrer" target="_blank" href="mailto: dlam96@knights.ucf.edu"></a></li>
                            </ul>
                            <ul>
                                <li>&copy; Copyright 2019 Daniel Lam</li>
                            </ul>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
