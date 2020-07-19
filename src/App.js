import React from 'react';
import WheatherApp from './components/WheatherApp';
import './index.css';
function App() {
	const defautlLocation = {
		coords: {
			latitude: 0,
			longitude: 0
		}
	};

	return (
		<div className="App">
			<WheatherApp defaultLocation={defautlLocation} />
		</div>
	);
}

export default App;
