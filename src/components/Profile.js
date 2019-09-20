import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const propTypes = {
    username: PropTypes.string.isRequired
}

export default function Profile ({ onLogout }) {
    return (
        <div className=''>
            <h1>Bienvenido </h1>
            <button onClick={onLogout} className='btn blue darken-4'>
                <i className="material-icons prefix">exit_to_app</i>
            </button>
        </div>
    )
}

Profile.propTypes = propTypes;