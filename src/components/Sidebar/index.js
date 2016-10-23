import React from 'react';
import { Link } from 'react-router';

export default class Sidebar extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div className="sidebar">
				<h1>Micah Cowell</h1>
				<ul className="header">
	          		<li><Link to="/">Home</Link></li>
	          		<li><Link to="/about" activeClassName="active">About</Link></li>
	        	</ul>
			</div>
		);
	}
}
