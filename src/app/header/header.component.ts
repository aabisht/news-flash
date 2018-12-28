import { IWeatherData } from './../interface/weather.interface';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather/weather.service';
import { IDate } from '../interface/date.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  weatherData: IWeatherData;
  enableLocation: boolean;
  currentTime: IDate;
  currentTemp: string;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.currentTime = {
      date: null,
      month: '',
      days: ''
    };
    this.getWeather();
    this.getCurrentTime();
  }

  getWeather(): void {
    navigator.geolocation ? this.enableLocation = true : this.enableLocation = false;

    if (this.enableLocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this._weatherService.getWeather(position.coords.latitude, position.coords.longitude).subscribe(
          data => {
            console.log(data);
            this.weatherData = data;
            this.currentTemp = (data.main.temp - 273.15).toString() + '°C';
          }, error => {
            console.log('Error: ' + error);
          }
        );
      });
    }
  }

  getCurrentTime(): void {
    const date = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.currentTime.days = days[date.getDay()];

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December'];
    this.currentTime.month = monthNames[date.getMonth()];

    this.currentTime.date = date.getDate();
  }

}
