import React from 'react'

class LifecyclePetition extends React.Component {

    state = {
        tasks: []
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => this.setState({ tasks: data }));
    }

    render() {
        return (
            <pre>
            {JSON.stringify(this.state.tasks, null, 2)}
            </pre>
            );
    }
}

export default LifecyclePetition