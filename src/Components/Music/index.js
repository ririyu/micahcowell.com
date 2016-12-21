import React from 'react';
import request from 'request';
import Icon from './icon.png';

const getRecentTracksURL = "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=getmicah&api_key=b4678efadfadbcf8882ed8e5432173b1&format=json";

export default class Music extends React.Component {
	state = {
		recentTrack: ''
	}

	loadTrackData() {
		request(getRecentTracksURL, function (error, response, body) {
			if (!error && response.statusCode === 200) {
				var track = JSON.parse(body).recenttracks.track[0];
				var data =  track.artist['#text'] + ' - ' + track.name;
				this.setState({recentTrack:data});
			} else {

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
				<p>
					<a href="https://last.fm/user/getmicah" ref="track">
						{this.state.recentTrack}
					</a>
				</p>
			</div>
		);
	}
}
