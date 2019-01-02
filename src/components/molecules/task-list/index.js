import React from 'react';
import ReactDOM from 'react-dom';

import Task from '../../atoms/task';


class TaskList extends React.Component {


    render() {
        return (
            <div class="task-list">
                <Task></Task>
                <Task></Task>
            </div>
        );
    }
}

export default TaskList;
