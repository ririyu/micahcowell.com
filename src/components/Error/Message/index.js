import React from 'react';

export default class Message extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		switch (this.props.type) {
			case '404':
				return <p>page does not exist.</p>
			default:
				return <p>something happened...</p>
		}
	}
}
