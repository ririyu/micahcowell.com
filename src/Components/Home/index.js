import React from 'react';
import Icon from './icon.png';

export default class Home extends React.Component {
	render() {
		return (
			<div>
				<img src={Icon} alt="round-pushpin" />
				<div>
					<span>Richland, WA</span>
				</div>
			</div>
		);
	}
}
