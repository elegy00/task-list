import React from 'react';
import ReactDOM from 'react-dom';

import Task from '../../../model/types'
import TaskAdder from '../../molecules/TaskAdder'

import TaskView from '../../atoms/TaskView';
import styled from 'styled-components';


const ListDiv = styled.div`
    margin: 12px 12px;
    padding: 8px;
    border: 1px solid darkgrey`;


class TaskList extends React.Component<{tasks: Task[]}, { }> {


    handleTaskAdded(task: Task) {
        console.log(task);
    }


    render() {
        const tasks = this.props.tasks.map((t) => <TaskView task={t}></TaskView>)

        return (
            
            <ListDiv className="task-list">
                <TaskAdder onTaskAdded={this.handleTaskAdded}></TaskAdder>
                {tasks}
            </ListDiv>
        );
    }
}

export default TaskList;
