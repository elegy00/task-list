import React from 'react';
import styled from 'styled-components';

import TaskList from '../../molecules/task-list';




const DashboardDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin: 12px 12px`;

class Dashboard extends React.Component {
    render() {
        return (
            <DashboardDiv className="dashboard">
                <TaskList></TaskList>
                <TaskList></TaskList>
                <TaskList></TaskList>
            </DashboardDiv>
        );
    }
}

export default Dashboard;
