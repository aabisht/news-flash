export interface IWeatherData {
  coord: ICoord;
  weather: IWeather[];
  base: string;
  main: IMain;
  wind: IWind;
  clouds: IClouds;
  dt: number;
  sys: ISys;
  id: number;
  name: string;
  cod: number;
}

export interface ISys {
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface IClouds {
  all: number;
}

export interface IWind {
  speed: number;
  deg: number;
}

export interface IMain {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
  sea_level: number;
  grnd_level: number;
}

export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface ICoord {
  lon: number;
  lat: number;
}
