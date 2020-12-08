import React,{Component} from "react";
import TodoStore from "../../Store/TodoStore";
import {Input, Button} from 'semantic-ui-react';
import { observer,inject } from "mobx-react";
import styles from './AddTodo.module.css';

@inject('TodoStore')
@observer
class AddTodo extends Component<{TodoStore?:TodoStore},{}>{

    state={
        title:""
    }

    render(){
        const store =this.props.TodoStore;
        return(
            <>
            <div className={styles.addTodoWrapper}>
                <Input
                    placeholder='Todo Title...'
                    type="text"
                    value={this.state.title}
                    onChange={e=>this.setState({title:e.target.value})}
                />
                <Button
                    color="black"
                    onClick={ _=>{
                        store?.addTodo(
                            {title:this.state.title,
                            completed:false
                            })
                        this.setState({title:""});}
                    }>Add Todo</Button>
            </div>
        </>
        );
    }
}

export default AddTodo;
