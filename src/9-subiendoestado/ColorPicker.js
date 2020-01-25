import React from "react";

class ColorPicker extends React.Component {
    render() {
        return (
            <>
            <input type='color' onChange={this.props.changeColor} value={this.props.defaultColor} />
            </>
        );
    }
}

export default ColorPicker;