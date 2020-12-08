import React,{Component}from "react";
import TodoStore from "../../Store/TodoStore";
import { Button,Card} from "semantic-ui-react";
import { inject,observer} from "mobx-react";
import styles from './TodoList.module.css';

@inject('TodoStore')
@observer
class TodoList extends Component <{TodoStore?:TodoStore},{}>{

    state={
        todos:this.props.TodoStore?.todos
    
    }
    handelToogle(id:string){
        const Store=this.props.TodoStore;
        Store?.toogleTodo(id);
        this.setState({
            todos:Store?.todos
        });

    }
    handelDelete(id:string){
        const Store=this.props.TodoStore;
        Store?.removeTodo(id);
        this.setState({
            todos:Store?.todos
        });
    }
render(){
    const store =this.props.TodoStore;
    console.log("total from Todolist : ",store?.info.total);
    return(
            <>
            <div className={styles.todoList}>
                <Card.Group>
                { store?.todos.map(todo=>(
                    <Card  color="grey"  key={todo.id} >
                        <Card on>
                            <Card.Content header={todo.title}/>
                            <Card.Content  description={todo.completed ?"✅Completed": "❌Not Completed"}/>
                        </Card>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                                    <Button
                                        basic color='blue'
                                        onClick={_=>this.handelToogle(todo.id!)}
                                    >Toggle</Button>
                                    <Button 
                                        basic color='red'
                                        onClick={_=>this.handelDelete(todo.id!)}>Delete</Button>
                            </div>
                        </Card.Content>
                    </Card>
                ))}
                </Card.Group>
            </div>
            </>
        );

    }
    
}
export default TodoList;
