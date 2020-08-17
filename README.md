# Simple weather APP using Alan AI and react hooks.  


### Step #1: Get the weather apy from:

>>>[Open Weather Map](https://home.openweathermap.org )  
 
 You can to create a free acount for this and get you API KEY.


 ### Step #2: Create a free acount in Alan Conversational Voice Platform:

>>>[Alan Platform](https://alan.app/ )  

`npm install @alan-ai/alan-sdk-web`

You can see this [JavaScript Mastery](https://www.youtube.com/c/JavaScriptMastery/about) youtube channel for more info about Ala Platform, this video [Build a Voice Controlled React News Application - Alan AI Voice Assistant](https://youtu.be/rqw3OftE5sA)


### Step #3:  Study the API Weather response:

Use this example:
```
/ 20200816182800
// https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02

{
  "coord": {
    "lon": -0.13,
    "lat": 51.51
  },
  "weather": [
    {
      "id": 300,
      "main": "Drizzle",
      "description": "light intensity drizzle",
      "icon": "09d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 280.32,
    "pressure": 1012,
    "humidity": 81,
    "temp_min": 279.15,
    "temp_max": 281.15
  },
  "visibility": 10000,
  "wind": {
    "speed": 4.1,
    "deg": 80
  },
  "clouds": {
    "all": 90
  },
  "dt": 1485789600,
  "sys": {
    "type": 1,
    "id": 5091,
    "message": 0.0103,
    "country": "GB",
    "sunrise": 1485762037,
    "sunset": 1485794875
  },
  "id": 2643743,
  "name": "London",
  "cod": 200
}

```
