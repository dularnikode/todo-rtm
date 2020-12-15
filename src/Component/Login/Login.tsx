import React,{Component}from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import {Redirect,Link} from 'react-router-dom';
import LoginStore from '../../Store/LoginStore'
import {inject,observer} from 'mobx-react';
import styles from "./Login.module.css";
@inject('LoginStore')
@observer
class  Login extends Component<{LoginStore?:LoginStore},{}>{

    state={
        userid:"",
        password:"",
        error:"",
    }

    onSubmitHandler=()=>{
        const Store=this.props.LoginStore;
        if(Store?.user.uname!==""){
            if(Store?.user.uname===this.state.userid && Store?.user.password===this.state.password){
                Store.auth=true;
                
                this.setState({error:""});
            }
            else{
                this.setState({error:"Please fill the valid details"});
            }
        }
        else{
            this.setState({error:"Please SignUp first"})
        }
        this.setState({
            userid:"",
            password:""
        })  
    }

    render(){
        const Store=this.props.LoginStore;
        let errorMessage=null;
        if(this.state.error){
             errorMessage=(
                <p style={{color:'red'}}>* {this.state.error}</p>
                );
        }
        let authRedirect = null;
         if (Store?.auth){
             authRedirect=(<Redirect from="/login" to='/mytodo'/>);
         }
        let login=(
            <Form size='large' onSubmit={this.onSubmitHandler} >
                    <Segment stacked>
                    <Form.Input 
                        fluid icon='user' iconPosition='left' 
                        placeholder='E-mail address'
                        type='email' required
                        name='email'
                        value={this.state.userid}
                        onChange={e=>this.setState({userid:e.target.value})}
                    />
                    <Form.Input
                        fluid icon='lock' iconPosition='left'
                        placeholder='Password'
                        name='password'
                        type='password' required
                        onChange={e=>this.setState({password:e.target.value})}
                    />
                    {errorMessage} 
                    <Button color='black' fluid size='large'>
                        Login
                    </Button>
                    <div style={{margin:10}}></div>
                    <Button  color='blue' fliud="true" size='large' as={Link} to="/signup" >
                        
                        Don't have account | SignUp here
                    </Button>
                    </Segment>
                </Form>
        );

        return (
        <>
        <div >
            <Grid textAlign='center' style={{ height: '550px' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth:450 }}>
                {authRedirect}
                <Header as='h2' color='black' textAlign='center'>
                    Login to Wish Todos!
                </Header>
                <div className={styles.loginWrapper}>
                    {login}
                </div>
                
                </Grid.Column>
            </Grid>
        </div>
            
        </>
        );
    }
}      

export default Login;