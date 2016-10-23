import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Sidebar from './components/Sidebar';
import About from './components/About';
import Home from './components/Home';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
	}
	render() {
		return(
			<div className="app-container">
				{<Sidebar/>}
				{this.props.children || <Home/>}
			</div>
		);
	}
}

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path="about" component={About}/>
		</Route>
	</Router>
	), document.getElementById('app')
);
