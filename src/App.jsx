import React, {Component} from 'react';
import {Router,Switch} from "react-router-dom";
import {Login} from './pages/login';
import {Admin} from './pages/admin';
/*
应用根组件
 */
class App extends Component {
    render(){
        return<Switch>
            <Router path='/login' Component={Login}/>;
            <Router path='/' Component={Admin}/>
        </Switch>
    }
}


export default App
