import React from "react";

class ListComponent extends React.Component {
    render() {
        return (
            <>
            <ul>
                {this.props.data.map((el, key) => (
                    <li key={key}>{el.title}</li>
                ))}
            </ul>
            </>
        );
    }
}

export default ListComponent;