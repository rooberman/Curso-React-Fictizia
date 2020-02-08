import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import {
	Home,
	Users,
	UserDetail,
	NotFound,
} from './RouterComponents';

import Navbar from './Navbar';

export default function RouterContent() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/users/:id">
					<UserDetail />
				</Route>
				<Route path="/users">
					<Users />
				</Route>
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
		</Router>
	)
}