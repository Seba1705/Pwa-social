import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import firebase from 'firebase'
import Header from './components/Header'; 
import Login from './components/Login'; 
import Main from './components/Main'; 
// import Register from './components/Register'; 
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import Register from './components/Register';

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
        let email = document.querySelector('#email-login').value,
            pass = document.querySelector('#password-login').value;

            // Validar campos
            firebase.auth().signInWithEmailAndPassword(email, pass)
                .then(()=> M.toast({html: 'Usuario logueado'}))
                .catch(err => M.toast({html: 'Error de autenticacion'}))
    
    }

    handleLogout() {
        firebase.auth().signOut()
            .then(() => M.toast({html: 'Te has desconectado correctamente'}))
            .catch(() => M.toast({html: 'Error'}))
    }

    handleRegister(){
        return (
            <Register/>
        )
    }

    render() {
        return (
            <BrowserRouter>
                <div className='container-fluid'>
                    <Header/>
                    <Switch>
                        <Route path='/' exact render={() => {
                            if (this.state.user)
                                return ( <Main user={this.state.user} onLogout={this.handleLogout} />);
                            else
                                return ( <Login onAuth={this.handleOnAuth} onRegister={this.handleRegister}/>);
                        }}/>
                        
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
