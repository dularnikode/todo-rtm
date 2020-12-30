import React,{Component} from 'react';
import AddTodo from './AddTodo/AddTodo';
import TodoStatistics from './Stat/TodoStatistics';
import TodoList from './TodoList/TodoList';
import LoginStore from '../../Store/LoginStore';
import { inject,observer } from "mobx-react";
import TodoFallback from "./TodoFallback/TodoFallback";

@inject('LoginStore')
@observer
class TodoApp extends Component<{LoginStore?:LoginStore},{}>{


    render(){
        const Store=this.props.LoginStore;
        let todoApp=(<TodoFallback/>);

        if(Store?.auth){
            todoApp=(
                <div>
                    <TodoStatistics/>
                    <AddTodo/>
                    <TodoList/>
                </div>
            );
        }

        return(
            <div>
                {todoApp}
            </div>
            
        );
    }
}

export default TodoApp;
