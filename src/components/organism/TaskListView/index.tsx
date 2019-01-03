import React from 'react';

import { Task, TaskList } from '../../../model/types'
import TaskAdder from '../../molecules/TaskAdder'

import TaskView from '../../atoms/TaskView';
import styled from 'styled-components';


const ListDiv = styled.div`
    margin: 12px 12px;
    padding: 8px;
    border: 1px solid darkgrey`;


class TaskListView extends React.Component<{ tasklist: TaskList }, {}> {


    handleTaskAdded(task: Task) {
        console.log(task);
    }


    render() {
        const tasks = this.props.tasklist.tasks.map((t) => <TaskView task={t}></TaskView>)

        return (

            <ListDiv className="task-list">
            <h2>{this.props.tasklist.name}</h2>
                <TaskAdder onTaskAdded={this.handleTaskAdded}></TaskAdder>
                {tasks}
            </ListDiv>
        );
    }
}

export default TaskListView;
