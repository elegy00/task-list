import React from 'react';

import styled from 'styled-components';


const Div = styled.div`color: pink`;

  class Task extends React.Component {

  
    render() {
      return (
        <Div className="task">
          my task
        </Div>
      );
    }
  }

export default Task;
