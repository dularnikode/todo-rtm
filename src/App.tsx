import React,{Component} from 'react';
import './App.css';
import Layout from './Component/Layout/Layout';
import TodoStore from './Component/Store/TodoStore';
import {Provider} from 'mobx-react';

class App extends Component<{},{}>{
private todoStore: TodoStore;
  constructor(props:any){
    super(props)
    this.todoStore =new TodoStore();
  }

  componentDidMount(){
    console.log(this.todoStore.todos);
  }

  render(){
    return(
      <div>
        <Provider TodoStore={this.todoStore}>
          <Layout/>
        </Provider>
       
      </div>
    );
  }
}

export default App;
