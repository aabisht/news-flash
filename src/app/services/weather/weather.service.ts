import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/app.constant';
import { IWeatherData } from 'src/app/interface/weather.interface';
import { map } from 'rxjs/operators';

@Injectable()
export class WeatherService {
  private _getWeatherServiceUrl: string;

  constructor(private _http: Http) { }

  getWeather(lat: number, log: number): Observable<IWeatherData> {
    this._getWeatherServiceUrl = Constants.Weather_URL + '?lat=' + lat + '&lon=' + log + '&appid=' + Constants.Weather_API_KEy;
    return this._http.get(this._getWeatherServiceUrl).pipe(
      map(res => {
        if (res.status !== 200) {
          this.handleError(res);
        } else {
          return res.json();
        }
      }
    ));
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

}
