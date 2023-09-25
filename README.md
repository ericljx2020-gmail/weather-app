# Intern Weather App
We need the ability to see the current weather for any given city. 

### Task
This page should let me enter in a city or zip code into an input field. After clicking a "get weather" button, I should should the current information displayed on the page:
* Selected city
* Current weather condition
* Weather condition icon
* Temperature
* Last updated date

Weather data will be retrieved from https://www.weatherapi.com/. The api url and api key are provided within the code.

### Bonus:
* Show any loading indicator while fetching the weather data (e.g. “Loading…”)
* If no weather data is returned from the api call, show a default message
* If the weather api returns an error, show an error message

## System setup (Laptop)
#### You will need to have Git on your system
https://git-scm.com/downloads

#### Your computer should have Node and NPM installed
* Macbook recommendation - https://github.com/nvm-sh/nvm
* Windows recommendation - https://github.com/coreybutler/nvm-windows 

#### You will need to have the Angular CLI installed globally on your system
`npm install -g @angular/cli`

#### To initialize and run the application
1. Go to the project folder `cd intern-weather-app`
2. `npm install`
3. `ng serve` ( http://localhost:4200 )

#### Coding will be done in the following two folders:
* app/weather/weather.component.ts (typescript/javascript)
* app/weather/weather.component.html (html)
