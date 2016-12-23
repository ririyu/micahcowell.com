import React from 'react';
import Icon from './icon.png';

export default class Work extends React.Component {
	render() {
		return (
			<div>
				<img src={Icon} alt="books" />
				<div>
					<span>Freelance Web Developer</span>
				</div>
				<ul>
					<li>
						<b>2016:</b> Irrigation at Mercer Farms
					</li>
					<li>
						<b>2015:</b> Web Design for MSLK&nbsp;
						(<a href="http://sherikoetting.com">1</a>,&nbsp;
						<a href="http://giv-giving.com">2</a>)
					</li>
				</ul>
			</div>
		);
	}
}
