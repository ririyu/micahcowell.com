import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './Components/Home';
import School from './Components/School';
import Mail from './Components/Mail';
import Music from './Components/Music';

export default class App extends React.Component {
	render() {
		return(
			<div className="app-container">
				<h1>Micah Cowell</h1>
				<Home />
				<School />
				<Mail />
				<Music />
			</div>
		);
	}
}

ReactDOM.render(
  <App />, document.getElementById('root')
);
