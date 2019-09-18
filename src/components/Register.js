import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class Register extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    render() {
        return (
            <div id="register-page" className="row"> 
                <div className="col s12 z-depth-6 card-panel">
                    <form className="login-form">
                        <div className="row"></div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">person_outline</i>
                                <input className="validate" id="name" type="text" />
                                <label htmlFor="name" data-error="wrong" data-success="right">Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">mail_outline</i>
                                <input className="validate" id="email" type="email" />
                                <label htmlFor="email" data-error="wrong" data-success="right">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">lock_outline</i>
                                <input id="password" type="password" />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">lock_outline</i>
                                <input id="repassword" type="password" />
                                <label htmlFor="repassword">Re-enter Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <a href="#" className="btn blue-effect blue darken-4 col s12" id="btn-register">Register</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
