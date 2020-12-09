import React,{ Component } from "react";
import HeaderMenu from '../Header/HeaderMenu';
// import {inject,observer} from 'mobx-react';
import Login from "../Login/Login";
import { Route, Switch } from 'react-router-dom';
import Signup from "../Login/Signup";
import TodoApp from "../Todos/TodoApp";

class Layout extends Component{

    render(){
        console.log("[Layout:] match");
        return(
            <>
            <HeaderMenu/>
            <Switch>
                <Route path="/mytodo" exact component={TodoApp}/> 
                <Route path="/login" exact component={Login}/>
                <Route path="/"  component={Signup}/>
            </Switch>
            </>
        );
    }
}

export default Layout;