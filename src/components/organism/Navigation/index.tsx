import React from 'react';


import { Link } from "@reach/router"
import styled from 'styled-components';


const NavDiv = styled.nav`
    margin: 12px 12px;
    padding: 8px;
    border: 1px solid darkgrey`;


class Navigation extends React.Component<{ }, {}> {
    render() {
        return (
            <NavDiv>
                <Link to="/">Dashboard</Link> |{" "}
                <Link to="settings">Settings</Link>
            </NavDiv>
        );
    }
}

export default Navigation;
