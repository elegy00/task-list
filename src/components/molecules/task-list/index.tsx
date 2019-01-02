import React from 'react';
import ReactDOM from 'react-dom';

import TaskView from '../../atoms/TaskView';


class TaskList extends React.Component {


    render() {
        return (
            <div className="task-list">
                <TaskView></TaskView>
                <TaskView></TaskView>
            </div>
        );
    }
}

export default TaskList;
