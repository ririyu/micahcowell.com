import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './Components/Home';
import School from './Components/School';
import Work from './Components/Work';
import Mail from './Components/Mail';
import Music from './Components/Music';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			opacity: 0,
			showMusic: true
		}
	}
	show(hideMusic) {
		if (hideMusic) {
			this.setState({showMusic:false});
		}
		this.setState({opacity:1});
	}
	render() {
		const appStyle = {
			opacity: this.state.opacity
		}
		return(
			<div className="app-container"
				 style={appStyle}>
				<h1>Micah Cowell</h1>
				<Home />
				<School />
				<Work />
				<Mail />
				{this.state.showMusic &&
					<Music onLoad={this.show.bind(this)}/>
				}
			</div>
		);
	}
}

ReactDOM.render(
  <App />, document.getElementById('root')
);
