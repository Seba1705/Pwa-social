import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header'; 
import Login from './components/Login'; 
import Main from './components/Main'; 
import Register from './components/Register'; 

export default class App extends Component {
    
    state = {
        user: null
    }

    render() {
        return (
            <BrowserRouter>
                <div className='container-fluid'>
                    <Header/>
                    <Switch>
                        <Route path='/' exact render={() => {
                            if (this.state.user)
                                return ( <Main/> );
                            else
                                return ( <Login/> );
                        }}/>
                        <Route path='/register' render={() => <Register/>}/> 
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
