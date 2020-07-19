var getPosition = function() {
	return new Promise(function(resolve, reject) {
		navigator.geolocation.getCurrentPosition(resolve, reject);
	});
};

export const getLocation = async () => {
	let location = {};

	if ('geolocation' in navigator) {
		location = await getPosition();
	}

	return location;
};
