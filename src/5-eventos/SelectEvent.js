import React from 'react'

class SelectEvent extends React.Component {

    state = {
        valor: ''
    }

    componentDidMount() {
        this.setState({ valor: 'dos'});
    }

    valueChange = (e) => {
        this.setState({ valor: e.target.value });
    }
    
    render() {
        return (
            <>
            <select onChange={(e) => this.valueChange(e)}>
                <option value="uno" selected={this.state.valor === 'uno'}>uno</option>
                <option value="dos" selected={this.state.valor === 'dos'}>dos</option>
                <option value="tres" selected={this.state.valor === 'tres'}>tres</option>
            </select>
            <p>
                {this.state.valor}
            </p>
            </>
        );
    }
}

export default SelectEvent