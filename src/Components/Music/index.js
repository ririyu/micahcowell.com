import React from 'react';
import Icon from './icon.png';

export default class Music extends React.Component {
	render() {
		return (
			<div>
				<img src={Icon} alt="headphone" />
				<p>
					<a href="https://last.fm/user/getmicah">David Bowie - Heroes</a>
				</p>
			</div>
		);
	}
}
