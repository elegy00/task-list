import React from 'react';

import styled from 'styled-components';

import Task from '../../../model/types'



const Div = styled.div`color: darkblue`;

class TaskView extends React.Component<{task: Task}, { }> {
    render() {
        return (
            <Div className="task">
                {this.props.task.name}
        </Div>
        );
    }
}

export default TaskView;
