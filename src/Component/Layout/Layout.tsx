import React,{ Component } from "react";
import HeaderMenu from '../Header/HeaderMenu';
import Login from "../Login/Login";
import { Route,Switch } from 'react-router';
import Signup from "../Login/Signup";
import TodoApp from "../Todos/TodoApp";

class Layout extends Component{

    render(){
        return(
            <>
            <HeaderMenu/>
                <Switch>
                    <Route path="/mytodo" exact ><TodoApp/></Route> 
                    <Route path="/login" exact><Login/></Route>
                    <Route path="/" ><Signup/></Route>
                </Switch>
            </>
        );
    }
}

export default Layout;