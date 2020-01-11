import React from 'react'

class Loading extends React.Component {
    /*
    render() {
        return <div>{this.props.show ? this.props.children : 'Loading...'}</div>;
    }
    */

    render() {
        return this.props.show ? this.props.children : 'Loading...';
    }
}

export default Loading