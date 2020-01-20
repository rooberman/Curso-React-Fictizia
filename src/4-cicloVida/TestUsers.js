import React from 'react'

class TestUsers extends React.Component {

    state = {
        users: ['Juan', 'Manuel']
    }

    componentDidMount() {
        this.addUser();
    }

    componentWillUnmount() {
        console.log('Me destruyo');
    }

    addUser = () => {
        var temp = [...this.state.users]; // Copia nueva del array
        temp.push('Luis');
        this.setState(state => ({ users: temp }));
    }

    render() {
        return (JSON.stringify(this.state.users));
    }
}

export default TestUsers