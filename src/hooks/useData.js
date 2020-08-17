import { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';


export const useData = () => {

	const ALAN_API_KEY = '42bdba96c985129c58e0ee0505f737882e956eca572e1d8b807a3e2338fdd0dc/stage';


	const [state, setState] = useState({
		data: [],
		loading: true

	});

	useEffect(() => {

		alanBtn({
			key: ALAN_API_KEY,
			onCommand: ({ command, cityWeathers }) => {

				switch (command) {
					case 'newWeathers':

						console.log(command, cityWeathers);
						setState({
							data: cityWeathers,
							loading: false
						})
						break;

					default:
						break;
				}
			}
		})
	}, []);

	return state;
};
