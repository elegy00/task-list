import React from 'react';
import ReactDOM from 'react-dom';

import Task from '../../../model/types'

import TaskView from '../../atoms/TaskView';
import styled from 'styled-components';


const ListDiv = styled.div`
    margin: 12px 12px;
    padding: 8px;
    border: 1px solid darkgrey`;


class TaskList extends React.Component<{tasks: Task[]}, { }> {


    render() {

        const tasks = this.props.tasks.map((t) => <TaskView task={t}></TaskView>)

        return (
            <ListDiv className="task-list">
                {tasks}
            </ListDiv>
        );
    }
}

export default TaskList;
