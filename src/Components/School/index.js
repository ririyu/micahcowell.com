import React from 'react';
import Icon from './icon.png';

export default class School extends React.Component {
	render() {
		return (
			<div>
				<img src={Icon} alt="books" />
				<div>
					<span>Richland High School</span>
				</div>
			</div>
		);
	}
}
