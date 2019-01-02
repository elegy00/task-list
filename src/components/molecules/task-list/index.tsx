import React from 'react';
import ReactDOM from 'react-dom';

import Task from '../../../model/types'

import TaskView from '../../atoms/TaskView';


class TaskList extends React.Component<{tasks: Task[]}, { }> {


    render() {

        const tasks = this.props.tasks.map((t) => <TaskView task={t}></TaskView>)

        return (
            <div className="task-list">
                {tasks}
            </div>
        );
    }
}

export default TaskList;
