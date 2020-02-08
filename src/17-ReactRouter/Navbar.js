import React from 'react'
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <Link to="/userdetail/4">User 4</Link>
                </li>
                <li>
                    <Link to="/userdetail/5">User 5</Link>
                </li>
            </ul>
        </nav>
    </div>
)
}
