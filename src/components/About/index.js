import React from 'react';

export default class About extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div className="about">
				<h1>About</h1>
				<p>Hello, my name is Micah Cowell. I am a self proclaimed web developer who likes the internet, hip hop, and fancy yo-yos.</p>
			</div>
		);
	}
}
