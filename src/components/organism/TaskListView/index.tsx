import React from 'react';

import { Task, TaskList } from '../../../model/types'
import TextAdder from '../../molecules/TextAdder'

import TaskView from '../../atoms/TaskView';
import styled from 'styled-components';


const ListDiv = styled.div`
    margin: 12px 12px;
    padding: 8px;
    border: 1px solid darkgrey`;


class TaskListView extends React.Component<{ tasklist: TaskList, onTaskAdded: (task: Task) => void }, {}> {

    constructor(props: any) {
        super(props);
    }

    handleTaskAdded(task: Task) {
        this.props.onTaskAdded(task);
    }


    render() {
        const tasks = this.props.tasklist.tasks.map((t) => <TaskView task={t}></TaskView>)

        return (
            <ListDiv className="task-list">
                <h2>{this.props.tasklist.name}</h2>
                <TextAdder onTaskAdded={(e) => this.handleTaskAdded(e)}></TextAdder>
                {tasks}
            </ListDiv>
        );
    }
}

export default TaskListView;
