import React from 'react'
import {useParams} from 'react-router-dom'

export default function UserDetail() {
    let {id} = useParams();
    return (
        <div>
            User {id}
        </div>
    )
}
