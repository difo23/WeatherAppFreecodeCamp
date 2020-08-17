const API_KEY = "8606abb9387ea5abcdaba69c4b0f99e8";


export const getWeather = async (location) => {

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${'london'}&appid=${API_KEY
		}`;




	console.log('Coordenadas enviadas', url);
	const resp = await fetch(url);
	const dataWeather = await resp.json();

	console.log(dataWeather);

	return dataWeather;
};
