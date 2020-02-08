import React from 'react'
import { Link, useParams } from 'react-router-dom'

export function Home() {
	return (
		<h1>Qué pasa</h1>
	)
}

export function Users() {
	return (
		<ul>
			<li>
				<Link to="/users/roberto">Roberto</Link>
			</li>
			<li>
				<Link to="/users/diana">Diana</Link>
			</li>
		</ul>
	)
}

export function UserDetail() {
	const {id} = useParams();
	return (
		<h2>
			Hola {id}
		</h2>
	)
}

export function NotFound() {
	return (
		<div>
			Ande vas?
		</div>
	)
}