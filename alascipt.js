// Use this sample to create your own voice commands
intent('What does this app do?', 'What can I do here?', 
      reply('This is a weather project.'));

const API_KEY = "8606abb9387ea5abcdaba69c4b0f99e8";
let  cityWeathers = [];

// News by Source
intent('Give me the weather from $(source* (.*))', (p) => {
    //let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;
    
    
    let city = 'london';
    
    if(p.source.value) {
        city = `${p.source.value.toLowerCase()}`
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY
		}`;
    
    
    api.request(url, (error, response, body) => {
        const  weather  = JSON.parse(body);
        
        if( weather.cod === '404') {
            p.play('Sorry, please try searching for weather from a different city');
            return;
        }
        
        cityWeathers.push(`The weather in ${p.source.value} is ${weather.weather[0].description}`)
        
        p.play({ command: 'newWeathers', cityWeathers });
        p.play(`Here are the (latest|recent) weather in ${p.source.value} is ${weather.weather[0].description}`);

    });
})