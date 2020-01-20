import React from 'react'
import SelectComponent from './SelectComponent'

class SelectComponentTest extends React.Component {

    state = {
        items: [
            { key: 1, item: 'opcion 1' }, 
            { key: 2, item: 'opcion 2' }, 
            { key: 3, item: 'opcion 3' }
        ]
    }

    cambio = () => {
        console.log('Cambio de valor')
    }

    render() {
        return (
            <>
            <SelectComponent items={this.state.items} onChange={this.cambio} />
            </>
        );
    }
}

export default SelectComponentTest