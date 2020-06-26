import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import { Menu, Container } from 'semantic-ui-react'

function Page({ children }) {
    return (<Fragment>
        <Menu inverted borderless fixed="top">
            <Container>
                <Menu.Item header>AC:NH Tracker</Menu.Item>
                <Menu.Item
                    name='Home'
                    as={NavLink}
                    exact
                    to='/'
                ></Menu.Item>
                <Menu.Item
                    name='Dailies'
                    as={NavLink}
                    to='/dailies'
                ></Menu.Item>
            </Container>
        </Menu>
        <Container text style={{ marginTop: '7em' }}>{children}</Container>
    </Fragment>);
}


export default Page;