import React,{PureComponent} from "react";
import TodoStore from "../../Store/TodoStore";
import {Statistic} from 'semantic-ui-react';
import styles from './TodoStat.module.css';
import {inject,observer} from "mobx-react";

@inject('TodoStore')
@observer
class TodoStatistics extends PureComponent<{TodoStore?:TodoStore},{}>{

    render(){
        const Store=this.props.TodoStore;
        console.log("Total: ",Store?.info.total);
        return (
            <div className={styles.statistics}>
                <Statistic> 
                    <Statistic.Value>{Store?.info.total}</Statistic.Value>
                    <Statistic.Label>Total</Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value>{Store?.info.completed}</Statistic.Value>
                    <Statistic.Label>Completed</Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value>{Store?.info.notCompleted}</Statistic.Value>
                    <Statistic.Label>Un Finished</Statistic.Label>
                </Statistic>
            </div>
        );
    }
    
    
}
export default TodoStatistics;
