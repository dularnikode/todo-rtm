import React, { Component } from 'react';
import {Menu} from "semantic-ui-react";
import {Link} from 'react-router-dom';
import LoginStore from '../../Store/LoginStore';
import { inject,observer } from "mobx-react";

@inject('LoginStore')
@observer
class HeaderMenu extends Component<{LoginStore?:LoginStore},{}>{
    state={
        auth:false,
        activeState:this.props.LoginStore?.activeState
    }


    componentDidMount(){
        const Store=this.props.LoginStore;
        this.setState({
            auth:Store?.auth
        });
    }

    // handelLoginMenu(){
    //    const Store=this.props.LoginStore;
    //    Store?.setactiveState('login');
    // }

     handelLogoutMenu(){
         console.log("[HeaderMenu:]/ loginStore: ",this.props.LoginStore);
         if(window.confirm("Do you really want to Logout ?")){
            this.props.LoginStore?.toggleAuth();
         } 
         console.log("[Header Menu] authvalue ",this.props.LoginStore?.auth);
    }


    render(){
        const Store=this.props.LoginStore;
        let loginlogout=(<Menu.Item
            name='login'
            active={Store?.activeState==='login'}
            
            as={Link} 
            to='/login'
            exact='true'
            >Login</Menu.Item>);
        if(Store?.auth){
            loginlogout=(<Menu.Item
                name='logout'
                active={Store.activeState==='logout'}
                onClick={e=>this.handelLogoutMenu()}
                as={Link} 
                to='/login'
                exact='true'
                
                >Logout</Menu.Item>);
        }
        return(
            <Menu inverted> 
                <Menu.Item as={Link} to="/" header>Wish Todo</Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item
                    name='mytodo'
                    as={Link}
                    to='/mytodo' exact='true'
                    >My Todos</Menu.Item>
                    {loginlogout}
                </Menu.Menu>
            </Menu>
            );
    }
    
}

export default HeaderMenu;