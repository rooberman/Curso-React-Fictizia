import React from 'react'

class InputEvent extends React.Component {

    state = {
        text: ''
    }

    inputChange = (e) => {
        this.setState({ text: e.target.value });
    }
    
    render() {
        return (
            <>
            <input onChange={(e) => this.inputChange(e)} />
            <div>
                {this.state.text}
            </div>
            </>
        );
    }
}

export default InputEvent