import { getLocation } from './getLocation';
import { getWeather } from './getWeather';

export const getData = async () => {
	const data = {
		location: {},
		weather: {}
	};

	data.location = await getLocation();
	data.weather = await getWeather(data.location);

	return data;
};
