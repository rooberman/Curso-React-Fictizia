import React from "react";
import ColorPicker from "./ColorPicker";
import Texto from "./Texto";

class Father extends React.Component {
    
    state = {
        color: '#ff0000'
    };

    handleChangeColor = (e) => {
        this.setState({color: e.target.value})
    }

    render() {
        return (
            <>
            <ColorPicker changeColor={this.handleChangeColor} defaultColor={this.state.color} />
            <Texto color={this.state.color} />
            </>
        );
    }
}

export default Father;