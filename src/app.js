import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Navigation from './components/Navigation';
import About from './components/About';
import Home from './components/Home';
import Error from './components/Error';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		console.log(props.children);
	}
	render() {
		return(
			<div className="app-container">
				<Navigation/>
				{this.props.children}
			</div>
		);
	}
}

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="about" component={About}/>
			<Route path="*" component={Error} type="404"/>
		</Route>
	</Router>
	), document.getElementById('app')
);
