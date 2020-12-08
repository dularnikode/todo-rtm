import React from 'react';
import {Menu} from "semantic-ui-react";

function HeaderMenu (){

    return(
    <Menu inverted> 
        <Menu.Item header>Wish Todo</Menu.Item>
        <Menu.Menu position='right'>
            <Menu.Item>
                My Todos
            </Menu.Item>
            <Menu.Item>Login</Menu.Item>
            <Menu.Item>Logout</Menu.Item>
        </Menu.Menu>
    </Menu>
    );
}

export default HeaderMenu;