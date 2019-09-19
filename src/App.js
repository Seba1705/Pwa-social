import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import firebase from 'firebase'
import Header from './components/Header'; 
import Login from './components/Login'; 
import Main from './components/Main'; 
// import Register from './components/Register'; 
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";

export default class App extends Component {
    
    state = {
        user: null
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged( user => {
            user ?  this.setState({user}) : this.setState({user: null});
        }); 
    }

    
    handleOnAuth () {
        M.toast({html : 'Login'});
    }

    handleLogout() {
        firebase.auth().signOut()
            .then(() => console.log('Te has desconenctado correctamente'))
            .catch(() => console.error('Ha ocurrido un error'))
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
                                return ( <Login onAuth={this.handleOnAuth} /> );
                        }}/>
                        
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
