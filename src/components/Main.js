import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import Profile from './Profile';

const proptypes = {
    user : PropTypes.object.isRequired,
    onLogout : PropTypes.func.isRequired,
    onRegister : PropTypes.func.isRequired
}   

export default class Main extends Component {

    state = {
        user: Object.assign({}, this.props.user )
    }

    render() {
        return (
            <div>
                <Profile onLogout={this.props.onLogout}/>
            </div>
        )
    }
}

Main.propTypes = proptypes;