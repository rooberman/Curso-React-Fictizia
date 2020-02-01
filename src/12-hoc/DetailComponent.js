import React from "react";

class DetailComponent extends React.Component {
    render() {
        return (
            <>
            <p>{this.props.data.title}</p>
            </>
        );
    }
}

export default DetailComponent;