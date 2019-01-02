import React from 'react';
import styled from 'styled-components';

import TaskList from '../../molecules/task-list';
import Task from '../../../model/types'




const DashboardDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin: 12px 12px`;

class Dashboard extends React.Component {

    constructor(props: any) {
        super(props);
        this.state = {
            tasks: [[{
                name: 'test work',
                position: 1
            } as Task]] as Task[][]
        };
    }

    render() {
        const tasks = 'dummy'
                     // this.state.tasks.map((t) => <TaskList task='{t}'></TaskList>)
        return (
            <div className="dashboard">
                <TaskList></TaskList>
                     <TaskList></TaskList>
            </div>
        );
    }
}

export default Dashboard;
