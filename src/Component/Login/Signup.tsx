import React,{Component} from 'react';
import LoginStore from '../../Store/LoginStore';
import {inject,observer} from 'mobx-react';
import styles from './Signup.module.css';
import { Redirect } from 'react-router';

@inject('LoginStore')
@observer
export default class Signup extends Component<{LoginStore?:LoginStore},{}>{


    state={
        fname:"",
        lname:"",
        uname:"",
        password:"",
        redirect:false
    }

    submitFromHandler=(event:any)=>{
        event.preventDefault();
        const store=this.props.LoginStore;
        const userData:any={
            uname:this.state.uname,
            fname:this.state.fname,
            lname:this.state.lname,
            password:this.state.password
        } 
        if(userData){
            store?.assignUser(userData);
        }
        window.alert("You have sucessfully signed up.");
        
        this.setState({
            fname:"",
            lname:"",
            uname:"",
            password:"",
        });
        let a=window.confirm("Do you want to login ? ");
        if(a){
            this.setState({redirect:true});
        }
    }
    render(){
        let redirect=null;
        if(this.state.redirect){
            redirect=(<Redirect to="/login"/>);
        }
        return(
            <>
            {redirect}
            <div className={styles.signupWrapper}>
                <div className={styles.signupHeader}>
                    <h2>Signup Please</h2>
                </div>
                <form onSubmit={this.submitFromHandler}>
                        <div className={styles.inputEle}>
                            <label>First Name</label>
                            <input  type="text" value={this.state.fname} required onChange={e=>this.setState({fname:e.target.value})}/>
                        </div>
                        <div className={styles.inputEle}>
                            <label>Last Name</label>
                            <input type="text" value={this.state.lname} required onChange={e=>this.setState({lname:e.target.value})}/>
                        </div>
                        <div  className={styles.inputEle}>
                            <label>Email</label>
                            <input type="email" value={this.state.uname} required onChange={e=>this.setState({uname:e.target.value})}/>
                        </div>
                        <div className={styles.inputEle}>
                            <label>Password</label>
                            <input  type="text" value={this.state.password} required onChange={e=>this.setState({password:e.target.value})}/>
                        </div>
                        <div className={styles.inputButton}>
                            <input className={styles.inputButton} type="submit" value="Submit"/>
                        </div>
                </form>
            </div>
            </>
            
        );
    }
}