import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/core/services/weather.service';
import * as moment from 'moment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-city-temp',
  templateUrl: './city-temp.component.html',
  styles: [],
})
export class CityTempComponent implements OnInit {
  cityName: any = '';
  tempForeCast: any = [];
  constructor(
    private readonly weatherSerive: WeatherService,
    private _Activatedroute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cityName = this._Activatedroute.snapshot.paramMap.get('cityName');
    this.getCityTemp(this.cityName);
  }

  getCityTemp(cityName:string) {
    
    if (cityName) {
      this.tempForeCast = [];
      this.weatherSerive
        .getSelectedCityForecast(cityName)
        .subscribe((res: any) => {
          if (res && res.cnt > 0) {
            res.list.forEach((data: any) => {
              data.dt = moment(data.dt * 1000).format('DD/MM/YYYY HH:mm:ss');
              data.weather[0].icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            });
          }

          this.tempForeCast = [
            ...res.list.filter((forcast: any) =>
              forcast.dt_txt.includes('09:00:00')
            ),
          ];
          if (this.tempForeCast && this.tempForeCast.length) {
            this.tempForeCast = this.tempForeCast.splice(0, 5);
          }
        });
    } else {
      this.router.navigate(['/']);
    }
  }
}
