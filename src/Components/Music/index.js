import React from 'react';
import request from 'request';
import Icon from './icon.png';

const getRecentTracksURL = "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=getmicah&api_key=b4678efadfadbcf8882ed8e5432173b1&format=json";

export default class Music extends React.Component {
	state = {
		response: null
	}
	loadTrackData() {
		request(getRecentTracksURL, function (error, response, body) {
			if (!error && response.statusCode === 200) {
				var track = JSON.parse(body).recenttracks.track[0];
				var data =  track.artist['#text'] + ' - ' + track.name;
				this.setState({response:data}, function() {
					this.props.onLoad();
				});
			} else {
				this.setState({response:'Error: could\'t connect to last.fm'}, function() {
					this.props.onLoad(true);
				});
			}
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
