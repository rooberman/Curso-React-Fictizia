import ShowDate from "../1-render/ShowDate";

import React, {useState} from 'react'
import ReplaceLetter from './ReplaceLetter'
import CallApi from "./CallApi";
import InputDirty from "./InputDirty";

function Main() {
    const [show, setShow] = useState(true)

    return (
        <>
            <span>input 'zamarro' to show error:<InputDirty /></span>

            <button onClick={() => setShow(!show)}>toggle replace</button>
            <ReplaceLetter show={show} />

            <CallApi />
        </>
    )
}

export default Main