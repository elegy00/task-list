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
                    tasks: []                        
                },
                {
                    name: 'urgent',
                    tasks: []
                },
                {
                    name: 'lookout',
                    tasks: []
                }
            ]
        };
    }


    handleTaskAdded(task: Task, taskList: TaskList) {
        let index = this.state.taskLists.findIndex((tl) => tl == taskList);
        let newList = {...taskList, tasks: [...taskList.tasks, task]}
        let newTasksLists = this.state.taskLists.slice();
        newTasksLists[index] = newList;
        this.setState({taskLists: newTasksLists});
    }


    render() {
        const tasklists = this.state.taskLists.map((t) =>
            <TaskListView
                tasklist={t}
                onTaskAdded={(ta) => this.handleTaskAdded(ta, t)}>
            </TaskListView>)

        return (
            <DashboardDiv className="dashboard">
                {tasklists}
            </DashboardDiv>
        );
    }
}

export default Dashboard;
