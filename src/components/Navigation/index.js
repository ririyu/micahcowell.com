import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class About extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div className="navigation">
				<IndexLink to="/" activeClassName="active">home</IndexLink>
				<Link to="/about" activeClassName="active">about</Link>
				<Link to="/about" activeClassName="active">about</Link>
				<Link to="/about" activeClassName="active">about</Link>
			</div>
		);
	}
}
