import React from 'react'

class ListItem extends React.Component {
    render() {
        return <li>{this.props.valor}</li>;
    }
}

export default ListItem