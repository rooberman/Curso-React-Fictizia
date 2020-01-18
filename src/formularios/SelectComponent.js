import React from 'react'

class SelectComponent extends React.Component {
    render() {
        return <select onChange={this.props.onChange}>
            {this.props.items.map((item, key) => <option key={key} value={item}>{item.item}</option> )}
        </select>;
    }
}

export default SelectComponent