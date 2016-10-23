import React from 'react';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div className="child home">
				<h2>Home</h2>
				<p>this is the index page.</p>
			</div>
		);
	}
}
