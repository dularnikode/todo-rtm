import React, { Component } from "react";
import {Button,Header,Modal,Form,Icon} from 'semantic-ui-react';
import { inject,observer } from "mobx-react";
import TodoStore from '../../../Store/TodoStore';

export interface Props{
    eId:string;
    eTitle:string;
    eComplete:boolean;
    TodoStore?:TodoStore;
}
export interface State{
    open:boolean;
    title:string;
    completed:boolean;
}
@inject('TodoStore')
@observer
class EditTodoModal extends Component<Props,State>{
    constructor(props:Props){
        super(props);
        this.state={
            open:false,
            title:this.props.eTitle,
            completed:this.props.eComplete
        }
        this.updateHandler=this.updateHandler.bind(this);
    }

    updateHandler(id:string,etitle:string,ecompleted:boolean){
        const Store= this.props.TodoStore;
        Store?.editTodo(id,etitle,ecompleted);
        this.closeModal();
        window.alert("Todo updated sucessfully");
     }

    closeModal=()=>(this.setState({open:false}));
    openModel=()=>(this.setState({open:true}));
    // onUpdateHandler(event,id){
    // }

    inputChangeHandlerTitle(e:any){
        this.setState({
            title:e.target.value
        })
    }
    inputChangeHandlerCompleted(e:any,value:any){
         const flag:boolean =value.value=="completed" ? true:false;
         this.setState({
             completed:flag
         })
    }


    render(){
        const open=this.state.open;
        return(
            <Modal
                open={open}
                onClose={this.closeModal}
                trigger={<Button basic color="green" onClick={this.openModel}>Edit</Button>}
                closeIcon
                closeOnDimmerClick
            >
                <Header content='Edit Todo'/>
                <Modal.Content>
                    <Form>
                        <Form.Input label="Title :" name="title" onChange={e=>this.inputChangeHandlerTitle(e)} value={this.state.title}/>
                        <Form.Select label="Completed : "  name="completed" options={[{text:"Completed",value:"completed"},{text:"Not Completed",value:"notCompleted"}]} onChange={(e,value)=>this.inputChangeHandlerCompleted(e,value)} value={this.state.completed?"completed":"notCompleted"}/>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='red' onClick={this.closeModal}>
                        <Icon name='cancel'/> Cancel
                    </Button>
                    <Button color='green' onClick={(e)=>this.updateHandler(this.props.eId,this.state.title,this.state.completed)}>
                        <Icon name='checkmark' /> Update
                    </Button>
                </Modal.Actions>
            </Modal>
        );


    }
}

export default EditTodoModal;

