import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  private http = inject(HttpClient);
  private fb = inject(FormBuilder);

  /*
  * Angular notes:
  * To access variables in this file, prepend the variable name with 'this.' (e.g. this.location)
  * For typescript type errors, you can use the 'any' type to bypass the error (e.g. function myFunction(name: any))
  */


  // Angular's form builder. Location is the name of the input field.
  form: FormGroup = this.fb.group({
    location: '',
  });

  // Predefined variables. Feel free to change or add more.
  location = 'San Diego';
  err?: any;
  clicked?: any;
  completed?: any;
  weather?: any;
  city?: any;
  weatherInfo?: any;
  locationInfo?: any;
  condition?: any;
  conditionIcon?: any;
  tempc?: any;
  lastUpdated?: any;
  loadingSign?: any;
  curSign?: any;
  


  // Lifecycle hook. Called after view has initialized.
  ngOnInit() { }


  // Called when the 'Get Weather' button is clicked.
  getWeather() {
    this.err = null;
    this.weather = null;
    this.location = this.form?.value.location;
    this.clicked = true;
    // Additional code...
    this.fetchWeather();
  }

  // Call this function to fetch weather data from API (ref - https://www.weatherapi.com/)
  // This get request requires an API key and the location to get weather data for.
  // Feel free to pass parameters to this function or change this in any way.
  fetchWeather() {
    const apiKey = '310337bc4d7444778ed30742222406';
    const location = this.location; // Placeholder variable. Update or replace this variable to get weather data.

    this.http.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`).subscribe({
      next: response => {
        let temp = JSON.stringify(response);
        let responseObj = JSON.parse(temp);

        console.log(responseObj);
        this.curSign = "loading...";
        

        setTimeout(() => {
          this.weather = responseObj.current;
          this.locationInfo = responseObj.location;
          // console.log(this.locationInfo);
          
          //required fields
          this.city = this.locationInfo.name;
          this.condition =this.weather.condition.text;
          this.conditionIcon = this.weather.condition.icon;
          this.tempc = this.weather.temp_c;
          this.lastUpdated = this.weather.last_updated;
          console.log("This code runs after 3 seconds.");
        }, 3000); 
      },
      error: err => {
        this.err = err;
        console.error('Get weather error: ', err);
      }
    });
    
  }
  
  

}
