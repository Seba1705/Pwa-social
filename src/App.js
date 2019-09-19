import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import firebase from 'firebase'
import Header from './components/Header'; 
import Login from './components/Login'; 
import Main from './components/Main'; 
import Register from './components/Register'; 

export default class App extends Component {
    
    state = {
        user: null
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged( user => {
            // if(user)
            //     this.setState({user});
            // else    
            //     this.setState({user: null});
            user ?  this.setState({user}) : this.setState({user: null});
        }); 
    }

    
    handleOnAuth () {
        
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
                        {/* <Route path='/register' render={() => <Register/>}/>  */}
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
