import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div className="child home">
				<h1>Home</h1>
				<p>this is the index page.</p>
			</div>
		);
	}
}
