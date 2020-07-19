export const getWeather = async (location) => {
	const lon = location.coords.longitude;
	const lat = location.coords.latitude;
	const url = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`;
	console.log('Coordenadas enviadas', lon, lat);
	const resp = await fetch(url);
	const dataWeather = await resp.json();

	return dataWeather;
};
