import React from 'react'

class Child extends React.Component {
    render() {
        return <button onClick={this.props.onPress}>{this.props.text}</button>;
    }
}

export default Child