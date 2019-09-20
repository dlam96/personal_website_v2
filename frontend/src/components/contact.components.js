import React, { Component } from 'react';
import axios from 'axios';

export class Contact extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCompany = this.onChangeCompany.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            company: '',
            email: '',
            phonenumber: '',
            message: ''
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeCompany(e) {
        this.setState({
            company: e.target.value
        })
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    
    onChangePhoneNumber(e) {
        this.setState({
            phonenumber: e.target.value
        })
    }

    onChangeMessage(e) {
        this.setState({
            message: e.target.value
        })
    }

    // Submit then reset the states
    onSubmit(e) {
        e.preventDefault();
        const contact = {
            name: this.state.name,
            company: this.state.company,
            email: this.state.email,
            phonenumber: this.state.phonenumber,
            message: this.state.message
        }
        console.log(contact);
        axios.post('http://localhost:5000/add', contact)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            company: '',
            email: '',
            phonenumber: '',
            message: ''
        })
    }

    render() {
        return (
            <section id="contact" className="container border-top border-dark">
                <div className="row contact">
                    <div className="col-md-8">
                        <h1>Get In Touch</h1>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group row"> 
                                {/* <label>Name: </label> */}
                                <div className="col-md-6">
                                    <input type="text"
                                        placeholder="Name"
                                        required
                                        className="form-control"
                                        value={this.state.name}
                                        onChange={this.onChangeName}
                                        />
                                </div>
                                <div className="col-md-6">
                                    <input type="text"
                                        placeholder="Company"
                                        required
                                        className="form-control"
                                        value={this.state.company}
                                        onChange={this.onChangeCompany}
                                        />
                                </div>
                            </div>
                            <div className="form-group row"> 
                                <div className="col-md-6">
                                    {/* <label>Email: </label> */}
                                    <input type="text"
                                        required
                                        placeholder="Email"
                                        className="form-control"
                                        value={this.state.email}
                                        onChange={this.onChangeEmail}
                                        />
                                </div>
                                <div className="col-md-6">
                                    {/* <label>Phone: </label> */}
                                    <input type="text"
                                        required
                                        placeholder="Phone"
                                        className="form-control"
                                        value={this.state.phonenumber}
                                        onChange={this.onChangePhoneNumber}
                                        />
                                </div>
                            </div>
    
                            <div className="form-group"> 
                                {/* <label>Message: </label> */}
                                <textarea placeholder="Type Your Message Here"className="form-control"  cols="50" rows="15" value={this.state.message} onChange={this.onChangeMessage}></textarea>
                                {/* <input type="text"
                                    className="form-control"
                                    value={this.state.message}
                                    onChange={this.onChangeMessage}
                                    /> */}
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Submit" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4 mt-5">
                        <h4> Address and Phone</h4>
                        <p> 
                            <div>Daniel Lam</div> 
                            <div>5012 Creekside Park Ave</div> 
                            <div>Orlando, Fl 32811</div>
                            <div>407-371-9397</div>

                        </p>
                    </div>
                </div>
   
            </section>
        );
    }
}

export default Contact;
