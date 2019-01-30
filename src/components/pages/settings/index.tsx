import React from 'react';

import styled from 'styled-components';

import { RouteComponentProps } from '@reach/router';
import { gql } from 'apollo-boost';
import { Mutation } from "react-apollo";
import CurrentLists from './CurrentLists';
import TextAdder from '../../molecules/TextAdder';


const Div = styled.div`color: darkblue`;

const AddListMutation = gql`
    mutation AddListMutation($name: String!) {
    createList (
      input: { list: { name: $name } }
    ) {
      list {
        id
        name
        updatedAt
        createdAt
      }
    }
  }
  
`;

class SettingsPage extends React.Component<RouteComponentProps, {}> {
    render() {
        return (
            <div>
                <h1>Settings</h1>
                <p>Many grand settings can be worked on here</p>
                <CurrentLists></CurrentLists>
                <Mutation mutation={AddListMutation}>
                {(addListMutation) => {
                    return <TextAdder onTaskAdded={(e) => addListMutation({ variables: { name: e.name } })}></TextAdder>
                    
                }}
                
                </Mutation>
            </div>
        );
    }
}

export default SettingsPage;
