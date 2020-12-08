import React,{ Component } from "react";
import HeaderMenu from '../Header/HeaderMenu';
import AddTodo from "../Todos/AddTodo/AddTodo";
import TodoList from '../Todos/TodoList/TodoList';
import TodoStatistics from "../Todos/Stat/TodoStatistics";
import TodoStore from '../Store/TodoStore';
import {inject,observer} from 'mobx-react';

class Layout extends Component<{TodoStore?:TodoStore}>{

    render(){
        console.log(this.props.TodoStore);
        return(
            <>
                <HeaderMenu/>
                <TodoStatistics/>
                <AddTodo/>
                <TodoList/>
            </>
        );
    }
}

export default Layout;