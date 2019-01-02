import React from 'react';
import ReactDOM from 'react-dom';

import Task from '../../../model/types'

import TaskView from '../../atoms/TaskView';
import styled from 'styled-components';


const AddTask = styled.div`
    margin: 12px 12px;
    padding: 8px;
    border: 1px solid darkgrey`;


class TaskAdder extends React.Component<{onTaskAdded: (task: Task) => void }, { text: String }> {

    constructor(props: any) {
        super(props);
        this.state = { text: ''
        };
      }

    handleAddClicked() {
        const task = {name: this.state.text,
        position: 0} as Task;
        this.setState({text: ''})
        this.props.onTaskAdded(task);
    }

    updateText(event: any) {
        this.setState({text: event.target.value});
    }

    render() {
        
        return (
            <AddTask>
                <input type="text"  value={this.state.text as string} onChange={ (evt) => this.updateText(evt)}/>
                <button onClick={(e) => this.handleAddClicked()}>Add</button>
            </AddTask>
        );
    }
}

export default TaskAdder;
