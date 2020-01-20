import React from 'react'

class Enlace extends React.Component {
    render() {
        return <a href={this.props.link} target={this.props.openInNewTab ? '_black' : ''}>{this.props.texto}</a>;
    }
}

export default Enlace