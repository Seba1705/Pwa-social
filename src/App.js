import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header'; 
import Login from './components/Login'; 
import Main from './components/Main'; 
import Register from './components/Register'; 

export default class App extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <BrowserRouter>
                <div className='container-fluid'>
                    <Header/>
                    <Switch>
                        <Route path='/login' render={() => <Login/>} />
                        <Route path='/main' />
                        <Route path='/register' />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
