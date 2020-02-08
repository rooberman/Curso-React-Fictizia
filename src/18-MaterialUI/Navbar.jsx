import React from 'react';
import {List, ListItem} from '@material-ui/core'
import ListItemLink from './ListItemLink'

export default function Navbar() {
	return (
        <List component="nav">
            <ListItem button>
                <ListItemLink icon="" primary="Home" to="/"/>
            </ListItem>
            <ListItem button>
                <ListItemLink icon="" primary="Users" to="/users"/>
            </ListItem>
        </List>
	)
}