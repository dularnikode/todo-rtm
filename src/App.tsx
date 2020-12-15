import React,{Component} from 'react';
import './App.css';
import Layout from './Component/Layout/Layout';
import TodoStore from './Store/TodoStore';
import {Provider} from 'mobx-react';
import LoginStore from './Store/LoginStore';
import {RouteComponentProps} from 'react-router-dom';
class App extends Component<{},{}>{

  render(){
    return(
      <div>
        <Provider TodoStore={new TodoStore()} LoginStore={new LoginStore()}>
          <Layout/>
        </Provider>
       
      </div>
    );
  }
}

export default App;
