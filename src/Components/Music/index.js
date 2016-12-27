import React from 'react';
import axios from 'axios';
import Icon from './icon.png';

const getRecentTracksURL = "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=getmicah&api_key=b4678efadfadbcf8882ed8e5432173b1&format=json";

export default class Music extends React.Component {
	constructor() {
		super();
		this.state = {
			response: null
		}
	}
	loadTrackData() {
		axios.get(getRecentTracksURL)
			.then(function(response) {
				var track = response.data.recenttracks.track[0];
				var response =  track.artist['#text'] + ' - ' + track.name;
				this.setState({response}, function() {
					this.props.onLoad();
				});

			}.bind(this))
			.catch(function(error) {
				let response = 'Error: could\'t connect to last.fm';
				this.setState({response}, function() {
					this.props.onLoad(error);
				});
			}.bind(this));
	}
	componentDidMount() {
		this.loadTrackData();
	}
	render() {
		return (
			<div>
				<img src={Icon} alt="headphone" />
				<div>
					<a href="http://last.fm/user/getmicah">
						{this.state.response}
					</a>
				</div>
			</div>
		);
	}
}
