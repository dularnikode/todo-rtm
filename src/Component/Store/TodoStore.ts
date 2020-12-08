import {observable,action,computed,reaction,configure} from 'mobx';
import {createContext} from "react";
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
        reaction (()=>this.todos,_=>console.log(this.todos));
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
        console.log("todos: ",this.todos);
    }

    @action.bound toogleTodo =(id:string)=>{
        console.log("toogle todo : ",id);
        this.todos =this.todos.map(todo=>{
            if(todo.id === id){
                return{
                    ...todo,
                    completed:!todo.completed
                };
            }
            return todo;
        })
        console.log("todos:",this.todos);
    }

    @action.bound removeTodo =(id:string)=>{
        console.log("remove Todo : ", id);
        this.todos=this.todos.filter(todo=>todo.id !==id);
        console.log("todos",this.todos);
    }

    @computed get info(){
        return{
            total:this.todos.length,
            completed:this.todos.filter(todo => todo.completed).length,
            notCompleted:this.todos.filter(todo=>!todo.completed).length
        };
    }

    @observable Total:number =this.todos.length;


}
