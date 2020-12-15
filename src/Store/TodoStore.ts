import {observable,action,computed,configure} from 'mobx';
import {v4 as uuidv4}from "uuid";
import {makeObservable} from 'mobx';
configure({enforceActions:'always'});


export interface Todo{
    id?:string;
    title:string;
    completed:boolean;
}

export default class TodoStore{
     constructor(){
        makeObservable(this);
    }

    @observable todos:Todo[]=[
        { id: uuidv4(), title: "Item #1", completed: false },
        { id: uuidv4(), title: "Item #2", completed: true },
        { id: uuidv4(), title: "Item #3", completed: false }
    ];
    
    @action.bound addTodo=(todo:Todo)=>{
        const newarr=[...this.todos];
        newarr.push({
            ...todo,
            id:uuidv4()
        });
        this.todos=[...newarr];
    }

    @action.bound toogleTodo =(id:string)=>{
        this.todos =this.todos.map(todo=>{
            if(todo.id === id){
                return{
                    ...todo,
                    completed:!todo.completed
                };
            }
            return todo;
        })
    }
    @action.bound editTodo =(id:string,etitle:string,ecompleted:boolean)=>{
        this.todos=this.todos.map(todo=>{
            if(todo.id===id){
                return{
                    ...todo,
                    completed:ecompleted,
                    title:etitle
                };
            }
            return todo;
        })
    }

    @action.bound removeTodo =(id:string)=>{
        this.todos=this.todos.filter(todo=>todo.id !==id);
    }

    
    @computed get info(){
        return{
            total:this.todos.length,
            completed:this.todos.filter(todo => todo.completed).length,
            notCompleted:this.todos.filter(todo=>!todo.completed).length
        };
    }
}
