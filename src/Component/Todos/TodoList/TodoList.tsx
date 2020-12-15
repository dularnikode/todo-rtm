import React,{Component}from "react";
import TodoStore from "../../../Store/TodoStore";
import { Button,Card} from "semantic-ui-react";
import { inject,observer} from "mobx-react";
import styles from './TodoList.module.css';
import EditTodoModal from "../EditTodoModal/EditTodoModal";


@inject('TodoStore')
@observer
class TodoList extends Component <{TodoStore?:TodoStore}>{
    state={
        todos:this.props.TodoStore?.todos,
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
        if(window.confirm("Are you sure?")){
            Store?.removeTodo(id);
            this.setState({
                todos:Store?.todos
            });
        }
    }    

    handeledit(){

    }


render(){
    const store =this.props.TodoStore;
    return(
            <div className={styles.todoListWrapper}>
            <div className={styles.todoList}>
                <Card.Group>
                { store?.todos.map(todo=>(
                    <Card  color="grey"  key={todo.id}>
                        <Card on>
                            <Card.Content header={todo.title}/>
                                <Card.Content title={`Click to mark as ${todo.completed?"Not Completed":"Completed"}`} 
                            onClick={()=>this.handelToogle(todo.id!)}  
                                description={todo.completed ?"✅Completed": "❌Not Completed"}/>
                        </Card>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                                    <EditTodoModal
                                        eId={todo.id!}
                                        eTitle={todo.title}
                                        eComplete={todo.completed}
                                    />
                                    <Button 
                                        basic color='red'
                                        onClick={_=>this.handelDelete(todo.id!)}>Delete</Button>
                            </div>
                        </Card.Content>
                    </Card>
                ))}
                </Card.Group>
            </div>
            </div>
        );

    }
    
}
export default TodoList;
