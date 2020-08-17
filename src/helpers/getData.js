import { getWeather } from './getWeather';

export const getData = async (city) => {
	const data = {
		weather: {}
	};


	data.weather = await getWeather(city);

	return data;
};
