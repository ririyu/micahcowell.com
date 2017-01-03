import React from 'react';
import ReactDOM from 'react-dom';

import css from './Style/main.scss';

import Home from './Components/Home';
import School from './Components/School';
import Work from './Components/Work';
import Mail from './Components/Mail';
import Music from './Components/Music';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			musicWasLoaded: false,
			showMusic: true
		}
	}
	onMusicLoad(error) {
		if (error) {
			console.log(error);
			this.setState({showMusic:false});
		}
		this.setState({musicWasLoaded:true});
	}
	render() {
		const style = {
			opacity: 0
		}
		if (this.state.musicWasLoaded) {
			style.opacity = 1;
		}
		return (
			<div className="app-container" style={style}>
				<h1>Micah Cowell</h1>
				<Home />
				<School />
				<Work />
				{this.state.showMusic &&
					<Music onLoad={this.onMusicLoad.bind(this)}/>
				}
				<Mail />
			</div>
		);
	}
}

ReactDOM.render(
  <App />, document.getElementById('app')
);
