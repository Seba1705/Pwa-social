import React, { Component } from 'react';

import Register from './Register';


export default class Login extends Component {
    
    renderRegister = () => {
        return ( <Register />)
    }

    render() {
        return (
            <div id="login-page" className="row animated fadeIn"> 
                <div className="col s12 z-depth-6 card-panel">
                    <form className="login-form">
                        <div className="row"></div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">mail_outline</i>
                                <input className="validate" id="email-login" type="email" required/>
                                <label htmlFor="email-login" data-error="wrong" data-success="right">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">lock_outline</i>
                                <input id="password-login" type="password" className='validate' required/>
                                <label htmlFor="password-login">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <a href="#" className="btn blue-effect blue darken-4 col s12" id="btn-login">Login</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6 m6 l6">
                                <p className="margin medium-small">
                                    <a href="#" id="link-register">Register Now!</a>
                                </p>
                            </div>
                            <div className="input-field col s6 m6 l6">
                                <p className="margin right-align medium-small">
                                    <a href="#">Forgot password?</a>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
