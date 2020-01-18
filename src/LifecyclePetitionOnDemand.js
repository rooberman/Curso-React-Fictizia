import React from 'react'

class LifecyclePetitionOnDemand extends React.Component {

    state = {
        tasks: []
    }

    fetchData() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(res => res.json())
            .then(data => this.setState({ tasks: data }));
    }

    render() {
        return (
            <>
            <button onClick={this.fetchData.bind(this)}>
                Pulsame
            </button>
            <pre>
            {JSON.stringify(this.state.tasks, null, 2)}
            </pre>
            </>
        );
    }
}

export default LifecyclePetitionOnDemand