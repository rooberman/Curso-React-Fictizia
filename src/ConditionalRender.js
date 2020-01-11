import React from 'react'
import ShowDate from './ShowDate';

var visible = true;

export default () => {
    return visible ? <ShowDate /> : null
}

// export default () => <p>{visible ? <ShowDate /> : null}</p>