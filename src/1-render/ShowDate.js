import React from 'react'

function fechaActual() {
    var fecha = new Date;
    return fecha.toDateString();
}

const getDate = () => new Date();

export default () => 
<>
    <p>
        <span>fecha actual: {fechaActual()}</span>
        <span> y con otra función: {getDate().toDateString()}</span>
    </p>
</>
    