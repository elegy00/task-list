import React from 'react';
import styled from 'styled-components';

import TaskList from '../../molecules/task-list';
import Task from '../../../model/types'


const DashboardDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin: 12px 12px`;

class Dashboard extends React.Component<{}, { tasks: Task[][] }> {

    constructor(props: any) {
        super(props);
        this.state = {
            tasks: [[{
                name: 'test work',
                position: 1
            }, {
                name: 'test two',
                position: 2
            }, {
                name: 'test theee',
                position: 3
            }]]
        };
    }

    render() {
        const tasklists = this.state.tasks.map((t) => <TaskList tasks={t}></TaskList>)
        return (
            <div className="dashboard">
                {tasklists}
            </div>
        );
    }
}

export default Dashboard;
