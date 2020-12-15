import {observable,action,configure} from 'mobx';
import {makeObservable} from 'mobx';

configure({enforceActions:'always'});

export interface User{
    uname:string;
    fname:string;
    lname:string;
    password:string;   
}

class LoginStore{

     constructor(){
        makeObservable(this);
    }

    @observable user:User={
        uname:"",
        fname:"",
        lname:"",
        password:""
    };

    @observable auth:boolean=false;
    
    @observable activeState="";

    @action toggleAuth(){
        this.auth=!this.auth
    }

    @action assignUser(user:User){
        this.user=user;
    }

    

    @action setactiveState(str:string){
        this.activeState=str;
    }
}

export default LoginStore;
