import React from 'react';
import PropTypes from 'prop-types';
import { useData } from '../../hooks/useData';

const WheatherApp = (props) => {
	const { data, loading } = useData();


	console.log('Data ', data);

	return (
		<div>
			<h1> Wheather APP</h1>
			{loading && <h1>Loading...</h1>}
			<hr />

			{!loading &&
				(
					<div>
						<div>
							<h2>You current weather location is:</h2>
							<hr />
							<ul>

								{
									data.reverse().map((weather, i) => {
										return <li key={i}> {weather}</li>
									})
								}
							</ul>


							<div />
						</div>
					</div>
				)
			}
		</div>
	);
};

WheatherApp.propTypes = {
	defaultLocation: PropTypes.object
};

export default WheatherApp;
