import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import NotFound from "./NotFound";
import Users from "./Users";
import UserDetail from "./UserDetail";
import Navbar from "./Navbar";

export default function RouterContent() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <p>Home</p>
                </Route>
                <Route path="/users">
                    <Users />
                </Route>
                <Route path="/userdetail/:id">
                    <UserDetail />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    )
}