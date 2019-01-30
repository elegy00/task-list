import React from 'react';

import styled from 'styled-components';

import { RouteComponentProps } from '@reach/router';
import { gql } from 'apollo-boost';
import { Query } from "react-apollo";


const Div = styled.div`color: darkblue`;

export const ListsQuery = gql`
{ allLists {
    nodes {
      id
      name
    }
  }}
`

const CurrentLists = () => {
    
        return (
            <>
                <h2>Lists</h2>
                <Query query={ListsQuery}>

                {({ loading, error, data}) => {
                    if(loading) return <p>loading...</p>;
                    if(error)  return <p>error...</p>;
                    
                    return data.allLists.nodes.map((lst: any) => { return <div>{lst.name}</div>})
                }}

                </Query>
            </>
        );
}

export default React.memo(CurrentLists);
