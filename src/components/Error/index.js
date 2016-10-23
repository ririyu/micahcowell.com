import React from 'react';

import Message from './Message';

export default class Error extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div className="child home">
				<h2>Error: {this.props.route.type}</h2>
				<Message type={this.props.route.type}/>
			</div>
		);
	}
}
