import React from 'react';
import Icon from './icon.png';

export default class Mail extends React.Component {
	render() {
		return (
			<div>
				<img src={Icon} alt="mailbox" />
				<p>
					<a href="mailto:micahcowell@gmail.com">micahcowell@gmail.com</a>
				</p>
			</div>
		);
	}
}
