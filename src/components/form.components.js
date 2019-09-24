import React, { Component } from 'react';

export class Form extends Component {
    render() {
        return (
            <section id="form" className="wrapper">
                <div className=" text-contain">
                    <div >
                        <h1>Get in Touch</h1>
                        <p>My inbox is always open.<br/> 
                            Whether for a potential project or just to say hi, I'll try my best to answer your email!</p>
                        
                                
                        <a class="btn btn-primary " rel="noopener noreferrer" target="_blank" href="mailto: dlam96@knights.ucf.edu">Submit</a>
                    
                    </div>
                </div>
            </section>
        );
    }
}

export default Form;
