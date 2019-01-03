import React from 'react';
import styled from 'styled-components';

import TaskListView from '../../organism/TaskListView';
import { Task, TaskList } from '../../../model/types'


const DashboardDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin: 12px 12px`;

class Dashboard extends React.Component<{}, { taskLists: TaskList[] }> {

    constructor(props: any) {
        super(props);
        this.state = {
            taskLists: [
                {
                    name: 'test',
                    tasks: [
                        { name: 'item one', position: 1 },
                        { name: 'item two', position: 2 },
                        { name: 'item two', position: 3 },]
                },
                {
                    name: 'urgent',
                    tasks: [
                        { name: 'item one', position: 1 },
                        { name: 'item two', position: 2 },
                        { name: 'item two', position: 3 },]
                },
                {
                    name: 'lookout',
                    tasks: [
                        { name: 'item one', position: 1 },
                        { name: 'item two', position: 2 },
                        { name: 'item two', position: 3 },]
                }
            ]
        };
    }

    render() {
        const tasklists = this.state.taskLists.map((t) => <TaskListView tasklist={t}></TaskListView>)
        return (
            <DashboardDiv className="dashboard">
                {tasklists}
            </DashboardDiv>
        );
    }
}

export default Dashboard;
