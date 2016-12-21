import React from 'react';
import Icon from './icon.png';

export default class Home extends React.Component {
	render() {
		return (
			<div>
				<img src={Icon} alt="round-pushpin" />
				<p>Richland, WA</p>
			</div>
		);
	}
}
