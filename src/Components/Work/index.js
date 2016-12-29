import React from 'react';
import Icon from './icon.png';

export default class Work extends React.Component {
	render() {
		return (
			<div>
				<img src={Icon} alt="books" />
				<ul>
					<li>
						<b>Current:</b>
						<div>Freelance</div>
					</li>
					<li>
						<b>2016:</b>
						<div>Irrigation at Mercer Canyons</div>
					</li>
					<li>
						<b>2015:</b>
						<div>
							<span>Web Design for MSLK</span>
							<ul>
								<li><a href="http://sherikoetting.com">sherikoetting.com</a></li>
								<li><a href="http://gif-giving.com">gif-giving.com</a></li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
		);
	}
}
