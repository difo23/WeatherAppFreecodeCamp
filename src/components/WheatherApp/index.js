import React from 'react';
import PropTypes from 'prop-types';
import { useData } from '../../hooks/useData';

const WheatherApp = (props) => {
	const { data, loading } = useData();

	let location = data.location;
	let weather = data.weather;
	console.log('Data ', location, weather);

	return (
		<div>
			<h1> Wheather APP</h1>
			{loading && <h1>Loading...</h1>}
			<hr />

			{!loading && (
				<div>
					<div>
						<h2>You current location is:</h2>
						<hr />
						<div id="latitude">
							<h3> Latitude: </h3>
							<p> {location.coords.latitude} </p>
						</div>
						<div id="longitude">
							<h3> Longitude: </h3>
							<p> {location.coords.longitude} </p>
						</div>
					</div>
					<h2>
						The wheather in {weather.name} is {!weather.weather ? 'N/S' : weather.weather[0].description}:
						<img className="color" src={!weather.weather ? 'N/S' : weather.weather[0].icon} alt="weather" />
					</h2>
					<hr />

					<div />
				</div>
			)}
		</div>
	);
};

WheatherApp.propTypes = {
	defaultLocation: PropTypes.object
};

export default WheatherApp;
