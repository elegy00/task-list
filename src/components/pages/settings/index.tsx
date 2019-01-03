import React from 'react';

import styled from 'styled-components';

import { RouteComponentProps } from '@reach/router';


const Div = styled.div`color: darkblue`;

class SettingsPage extends React.Component<RouteComponentProps, {}> {
    render() {
        return (
            <div>
                <h1>Settings</h1>
                <p>Many grand settings can be worked on here</p>
            </div>
        );
    }
}

export default SettingsPage;
