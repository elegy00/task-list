import React from 'react';
import ReactDOM from 'react-dom';

import TaskList from '../../molecules/task-list';


class Dashboard extends React.Component {
    render() {
        return (
            <div class="dashboard">
                <TaskList></TaskList>
                <TaskList></TaskList>
                <TaskList></TaskList>
            </div>
        );
    }
}

export default Dashboard;
