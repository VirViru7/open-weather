import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/core/services/weather.service';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  public cities: any = [];
  constructor(private readonly weatherSerive: WeatherService) {}

  ngOnInit(): void {
    this.getCities();
  }

  getCities() {
    this.weatherSerive.getCitites().subscribe((res: any) => {
      if (res && res.cnt > 0) {
        res.list.forEach((data: any) => {
          data.main.temp = (data.main.temp - 273.15).toFixed(2);
          data.sys.sunrise = moment(data.sys.sunrise * 1000).format(
            'DD/MM/YYYY HH:mm:ss'
          );
          data.sys.sunset = moment(data.sys.sunset * 1000).format(
            'DD/MM/YYYY HH:mm:ss'
          );
          data.weather[0].icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        });
        this.cities = [...res.list];
      }
    });
  }
}
