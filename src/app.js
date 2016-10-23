import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div className="app-container">
				<h1>MyReactApp</h1>
			</div>
		);
	}
}

ReactDOM.render(
	<App />, document.getElementById('app')
);