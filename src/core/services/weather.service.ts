import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  entryPI = environment.entryAPI;
  europianCityIds= environment.europianCityIds;
  appId =environment.appId;
  constructor(private http: HttpClient) { }

  getCitites() {
    return this.http.get(`${this.entryPI}group?id=${this.europianCityIds}&appId=${this.appId}`);
  }

  getSelectedCityForecast(selectedCity:string) {
    return this.http.get(`${this.entryPI}forecast?q=${selectedCity}&units=metric&appid=${this.appId}`);
  }
}
