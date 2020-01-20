import React from "react";
import Child from "./Child";

class Parent extends React.Component {
    hacerAlgo() {
        console.log("boton pulsado");
    }

    render() {
        return <Child text="pulsame" onPress={this.hacerAlgo} />;
    }
}

export default Parent;
