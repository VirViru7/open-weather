import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { WeatherService } from 'src/core/services/weather.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
// Other imports
import { HttpClient } from '@angular/common/http';
import { CityTempComponent } from './city-temp.component';
import { RouterTestingModule } from '@angular/router/testing';

class watherServ {
  getSelectedCityForecast(cityName: string) {
    let result = {
      cod: '200',
      message: 0,
      cnt: 40,
      list: [
        {
          dt: 1626274800,
          main: {
            temp: 25.37,
            feels_like: 25.76,
            temp_min: 25.37,
            temp_max: 25.71,
            pressure: 1002,
            sea_level: 1002,
            grnd_level: 1005,
            humidity: 69,
            temp_kf: -0.34,
          },
          weather: [
            {
              id: 802,
              main: 'Clouds',
              description: 'scattered clouds',
              icon: '03d',
            },
          ],
          clouds: {
            all: 40,
          },
          wind: {
            speed: 4.35,
            deg: 185,
            gust: 5.25,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2021-07-14 15:00:00',
        },
        {
          dt: 1626285600,
          main: {
            temp: 24.83,
            feels_like: 25.07,
            temp_min: 23.74,
            temp_max: 24.83,
            pressure: 1005,
            sea_level: 1005,
            grnd_level: 1005,
            humidity: 65,
            temp_kf: 1.09,
          },
          weather: [
            {
              id: 802,
              main: 'Clouds',
              description: 'scattered clouds',
              icon: '03d',
            },
          ],
          clouds: {
            all: 47,
          },
          wind: {
            speed: 2.23,
            deg: 204,
            gust: 3.12,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2021-07-14 18:00:00',
        },
        {
          dt: 1626296400,
          main: {
            temp: 21.9,
            feels_like: 22,
            temp_min: 20.16,
            temp_max: 21.9,
            pressure: 1008,
            sea_level: 1008,
            grnd_level: 1006,
            humidity: 71,
            temp_kf: 1.74,
          },
          weather: [
            {
              id: 801,
              main: 'Clouds',
              description: 'few clouds',
              icon: '02n',
            },
          ],
          clouds: {
            all: 15,
          },
          wind: {
            speed: 1.88,
            deg: 281,
            gust: 3.57,
          },
          visibility: 10000,
          pop: 0.02,
          sys: {
            pod: 'n',
          },
          dt_txt: '2021-07-14 21:00:00',
        },
        {
          dt: 1626307200,
          main: {
            temp: 18.75,
            feels_like: 18.64,
            temp_min: 18.75,
            temp_max: 18.75,
            pressure: 1011,
            sea_level: 1011,
            grnd_level: 1006,
            humidity: 75,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01n',
            },
          ],
          clouds: {
            all: 8,
          },
          wind: {
            speed: 1.74,
            deg: 313,
            gust: 2.75,
          },
          visibility: 10000,
          pop: 0.02,
          sys: {
            pod: 'n',
          },
          dt_txt: '2021-07-15 00:00:00',
        },
        {
          dt: 1626318000,
          main: {
            temp: 17.46,
            feels_like: 17.35,
            temp_min: 17.46,
            temp_max: 17.46,
            pressure: 1011,
            sea_level: 1011,
            grnd_level: 1006,
            humidity: 80,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01n',
            },
          ],
          clouds: {
            all: 9,
          },
          wind: {
            speed: 1.76,
            deg: 332,
            gust: 2.86,
          },
          visibility: 10000,
          pop: 0.06,
          sys: {
            pod: 'n',
          },
          dt_txt: '2021-07-15 03:00:00',
        },
        {
          dt: 1626328800,
          main: {
            temp: 20.51,
            feels_like: 20.37,
            temp_min: 20.51,
            temp_max: 20.51,
            pressure: 1012,
            sea_level: 1012,
            grnd_level: 1007,
            humidity: 67,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          clouds: {
            all: 5,
          },
          wind: {
            speed: 2.24,
            deg: 335,
            gust: 3.38,
          },
          visibility: 10000,
          pop: 0.06,
          sys: {
            pod: 'd',
          },
          dt_txt: '2021-07-15 06:00:00',
        },
        {
          dt: 1626339600,
          main: {
            temp: 23.97,
            feels_like: 23.91,
            temp_min: 23.97,
            temp_max: 23.97,
            pressure: 1012,
            sea_level: 1012,
            grnd_level: 1007,
            humidity: 57,
            temp_kf: 0,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'light rain',
              icon: '10d',
            },
          ],
          clouds: {
            all: 44,
          },
          wind: {
            speed: 1.3,
            deg: 2,
            gust: 2.04,
          },
          visibility: 10000,
          pop: 0.33,
          rain: {
            '3h': 0.12,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2021-07-15 09:00:00',
        },
        {
          dt: 1626350400,
          main: {
            temp: 25.59,
            feels_like: 25.75,
            temp_min: 25.59,
            temp_max: 25.59,
            pressure: 1012,
            sea_level: 1012,
            grnd_level: 1007,
            humidity: 59,
            temp_kf: 0,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'light rain',
              icon: '10d',
            },
          ],
          clouds: {
            all: 69,
          },
          wind: {
            speed: 2.56,
            deg: 36,
            gust: 3.07,
          },
          visibility: 10000,
          pop: 0.62,
          rain: {
            '3h': 0.59,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2021-07-15 12:00:00',
        },
        {
          dt: 1626361200,
          main: {
            temp: 26.4,
            feels_like: 26.4,
            temp_min: 26.4,
            temp_max: 26.4,
            pressure: 1012,
            sea_level: 1012,
            grnd_level: 1007,
            humidity: 61,
            temp_kf: 0,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'light rain',
              icon: '10d',
            },
          ],
          clouds: {
            all: 72,
          },
          wind: {
            speed: 0.7,
            deg: 62,
            gust: 1.51,
          },
          visibility: 10000,
          pop: 0.98,
          rain: {
            '3h': 1.78,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2021-07-15 15:00:00',
        },
        {
          dt: 1626372000,
          main: {
            temp: 23.1,
            feels_like: 23.45,
            temp_min: 23.1,
            temp_max: 23.1,
            pressure: 1011,
            sea_level: 1011,
            grnd_level: 1006,
            humidity: 76,
            temp_kf: 0,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'light rain',
              icon: '10d',
            },
          ],
          clouds: {
            all: 86,
          },
          wind: {
            speed: 1.92,
            deg: 269,
            gust: 3.51,
          },
          visibility: 10000,
          pop: 1,
          rain: {
            '3h': 2.36,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2021-07-15 18:00:00',
        },
        {
          dt: 1626382800,
          main: {
            temp: 20.75,
            feels_like: 21.13,
            temp_min: 20.75,
            temp_max: 20.75,
            pressure: 1013,
            sea_level: 1013,
            grnd_level: 1008,
            humidity: 86,
            temp_kf: 0,
          },
          weather: [
            {
              id: 501,
              main: 'Rain',
              description: 'moderate rain',
              icon: '10n',
            },
          ],
          clouds: {
            all: 48,
          },
          wind: {
            speed: 2.05,
            deg: 356,
            gust: 3.06,
          },
          visibility: 10000,
          pop: 0.85,
          rain: {
            '3h': 3.33,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2021-07-15 21:00:00',
        },
        {
          dt: 1626393600,
          main: {
            temp: 18.95,
            feels_like: 19.33,
            temp_min: 18.95,
            temp_max: 18.95,
            pressure: 1013,
            sea_level: 1013,
            grnd_level: 1008,
            humidity: 93,
            temp_kf: 0,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'light rain',
              icon: '10n',
            },
          ],
          clouds: {
            all: 45,
          },
          wind: {
            speed: 0.76,
            deg: 128,
            gust: 1.18,
          },
          visibility: 10000,
          pop: 0.87,
          rain: {
            '3h': 1.11,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2021-07-16 00:00:00',
        },
        {
          dt: 1626404400,
          main: {
            temp: 18.39,
            feels_like: 18.77,
            temp_min: 18.39,
            temp_max: 18.39,
            pressure: 1014,
            sea_level: 1014,
            grnd_level: 1009,
            humidity: 95,
            temp_kf: 0,
          },
          weather: [
            {
              id: 802,
              main: 'Clouds',
              description: 'scattered clouds',
              icon: '03n',
            },
          ],
          clouds: {
            all: 50,
          },
          wind: {
            speed: 1.39,
            deg: 269,
            gust: 1.64,
          },
          visibility: 10000,
          pop: 0.06,
          sys: {
            pod: 'n',
          },
          dt_txt: '2021-07-16 03:00:00',
        },
        {
          dt: 1626415200,
          main: {
            temp: 20.53,
            feels_like: 20.88,
            temp_min: 20.53,
            temp_max: 20.53,
            pressure: 1015,
            sea_level: 1015,
            grnd_level: 1010,
            humidity: 86,
            temp_kf: 0,
          },
          weather: [
            {
              id: 802,
              main: 'Clouds',
              description: 'scattered clouds',
              icon: '03d',
            },
          ],
          clouds: {
            all: 31,
          },
          wind: {
            speed: 1.59,
            deg: 260,
            gust: 1.89,
          },
          visibility: 10000,
          pop: 0.01,
          sys: {
            pod: 'd',
          },
          dt_txt: '2021-07-16 06:00:00',
        },
        {
          dt: 1626426000,
          main: {
            temp: 25.05,
            feels_like: 25.31,
            temp_min: 25.05,
            temp_max: 25.05,
            pressure: 1016,
            sea_level: 1016,
            grnd_level: 1011,
            humidity: 65,
            temp_kf: 0,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'broken clouds',
              icon: '04d',
            },
          ],
          clouds: {
            all: 61,
          },
          wind: {
            speed: 1.62,
            deg: 278,
            gust: 1.76,
          },
          visibility: 10000,
          pop: 0.1,
          sys: {
            pod: 'd',
          },
          dt_txt: '2021-07-16 09:00:00',
        },
        {
          dt: 1626436800,
          main: {
            temp: 27.93,
            feels_like: 28.46,
            temp_min: 27.93,
            temp_max: 27.93,
            pressure: 1015,
            sea_level: 1015,
            grnd_level: 1010,
            humidity: 51,
            temp_kf: 0,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'light rain',
              icon: '10d',
            },
          ],
          clouds: {
            all: 54,
          },
          wind: {
            speed: 2.08,
            deg: 274,
            gust: 1.56,
          },
          visibility: 10000,
          pop: 0.63,
          rain: {
            '3h': 0.55,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2021-07-16 12:00:00',
        },
        {
          dt: 1626447600,
          main: {
            temp: 26.12,
            feels_like: 26.12,
            temp_min: 26.12,
            temp_max: 26.12,
            pressure: 1016,
            sea_level: 1016,
            grnd_level: 1011,
            humidity: 62,
            temp_kf: 0,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'light rain',
              icon: '10d',
            },
          ],
          clouds: {
            all: 92,
          },
          wind: {
            speed: 3.4,
            deg: 292,
            gust: 3.73,
          },
          visibility: 10000,
          pop: 0.67,
          rain: {
            '3h': 0.86,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2021-07-16 15:00:00',
        },
        {
          dt: 1626458400,
          main: {
            temp: 23.74,
            feels_like: 24.21,
            temp_min: 23.74,
            temp_max: 23.74,
            pressure: 1016,
            sea_level: 1016,
            grnd_level: 1011,
            humidity: 78,
            temp_kf: 0,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'light rain',
              icon: '10d',
            },
          ],
          clouds: {
            all: 96,
          },
          wind: {
            speed: 2.63,
            deg: 290,
            gust: 4.38,
          },
          visibility: 10000,
          pop: 0.82,
          rain: {
            '3h': 1.08,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2021-07-16 18:00:00',
        },
        {
          dt: 1626469200,
          main: {
            temp: 21.48,
            feels_like: 22.01,
            temp_min: 21.48,
            temp_max: 21.48,
            pressure: 1017,
            sea_level: 1017,
            grnd_level: 1012,
            humidity: 89,
            temp_kf: 0,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'light rain',
              icon: '10n',
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 2.42,
            deg: 298,
            gust: 5.18,
          },
          visibility: 10000,
          pop: 0.7,
          rain: {
            '3h': 0.43,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2021-07-16 21:00:00',
        },
        {
          dt: 1626480000,
          main: {
            temp: 20.08,
            feels_like: 20.6,
            temp_min: 20.08,
            temp_max: 20.08,
            pressure: 1017,
            sea_level: 1017,
            grnd_level: 1012,
            humidity: 94,
            temp_kf: 0,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'light rain',
              icon: '10n',
            },
          ],
          clouds: {
            all: 59,
          },
          wind: {
            speed: 1.95,
            deg: 330,
            gust: 3.46,
          },
          visibility: 10000,
          pop: 0.63,
          rain: {
            '3h': 0.24,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2021-07-17 00:00:00',
        },
        {
          dt: 1626490800,
          main: {
            temp: 19.13,
            feels_like: 19.55,
            temp_min: 19.13,
            temp_max: 19.13,
            pressure: 1017,
            sea_level: 1017,
            grnd_level: 1012,
            humidity: 94,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01n',
            },
          ],
          clouds: {
            all: 3,
          },
          wind: {
            speed: 1.97,
            deg: 335,
            gust: 4.21,
          },
          visibility: 10000,
          pop: 0.1,
          sys: {
            pod: 'n',
          },
          dt_txt: '2021-07-17 03:00:00',
        },
        {
          dt: 1626501600,
          main: {
            temp: 21.53,
            feels_like: 21.91,
            temp_min: 21.53,
            temp_max: 21.53,
            pressure: 1018,
            sea_level: 1018,
            grnd_level: 1013,
            humidity: 83,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          clouds: {
            all: 4,
          },
          wind: {
            speed: 2.71,
            deg: 325,
            gust: 4.15,
          },
          visibility: 10000,
          pop: 0.01,
          sys: {
            pod: 'd',
          },
          dt_txt: '2021-07-17 06:00:00',
        },
        {
          dt: 1626512400,
          main: {
            temp: 26.08,
            feels_like: 26.08,
            temp_min: 26.08,
            temp_max: 26.08,
            pressure: 1018,
            sea_level: 1018,
            grnd_level: 1013,
            humidity: 61,
            temp_kf: 0,
          },
          weather: [
            {
              id: 802,
              main: 'Clouds',
              description: 'scattered clouds',
              icon: '03d',
            },
          ],
          clouds: {
            all: 25,
          },
          wind: {
            speed: 2.65,
            deg: 341,
            gust: 3.34,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2021-07-17 09:00:00',
        },
        {
          dt: 1626523200,
          main: {
            temp: 29.41,
            feels_like: 29.82,
            temp_min: 29.41,
            temp_max: 29.41,
            pressure: 1017,
            sea_level: 1017,
            grnd_level: 1012,
            humidity: 47,
            temp_kf: 0,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'light rain',
              icon: '10d',
            },
          ],
          clouds: {
            all: 58,
          },
          wind: {
            speed: 2.64,
            deg: 346,
            gust: 2.79,
          },
          visibility: 10000,
          pop: 0.33,
          rain: {
            '3h': 0.13,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2021-07-17 12:00:00',
        },
        {
          dt: 1626534000,
          main: {
            temp: 27.45,
            feels_like: 28.41,
            temp_min: 27.45,
            temp_max: 27.45,
            pressure: 1017,
            sea_level: 1017,
            grnd_level: 1012,
            humidity: 57,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04d',
            },
          ],
          clouds: {
            all: 94,
          },
          wind: {
            speed: 4.71,
            deg: 325,
            gust: 5.57,
          },
          visibility: 10000,
          pop: 0.23,
          sys: {
            pod: 'd',
          },
          dt_txt: '2021-07-17 15:00:00',
        },
        {
          dt: 1626544800,
          main: {
            temp: 25.59,
            feels_like: 25.95,
            temp_min: 25.59,
            temp_max: 25.59,
            pressure: 1017,
            sea_level: 1017,
            grnd_level: 1012,
            humidity: 67,
            temp_kf: 0,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'light rain',
              icon: '10d',
            },
          ],
          clouds: {
            all: 78,
          },
          wind: {
            speed: 4.15,
            deg: 339,
            gust: 6.94,
          },
          visibility: 10000,
          pop: 0.56,
          rain: {
            '3h': 0.43,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2021-07-17 18:00:00',
        },
        {
          dt: 1626555600,
          main: {
            temp: 21.79,
            feels_like: 22.11,
            temp_min: 21.79,
            temp_max: 21.79,
            pressure: 1018,
            sea_level: 1018,
            grnd_level: 1013,
            humidity: 80,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01n',
            },
          ],
          clouds: {
            all: 8,
          },
          wind: {
            speed: 4.03,
            deg: 337,
            gust: 9.24,
          },
          visibility: 10000,
          pop: 0.19,
          sys: {
            pod: 'n',
          },
          dt_txt: '2021-07-17 21:00:00',
        },
        {
          dt: 1626566400,
          main: {
            temp: 19.23,
            feels_like: 19.17,
            temp_min: 19.23,
            temp_max: 19.23,
            pressure: 1018,
            sea_level: 1018,
            grnd_level: 1013,
            humidity: 75,
            temp_kf: 0,
          },
          weather: [
            {
              id: 801,
              main: 'Clouds',
              description: 'few clouds',
              icon: '02n',
            },
          ],
          clouds: {
            all: 11,
          },
          wind: {
            speed: 3.03,
            deg: 325,
            gust: 6.65,
          },
          visibility: 10000,
          pop: 0.19,
          sys: {
            pod: 'n',
          },
          dt_txt: '2021-07-18 00:00:00',
        },
        {
          dt: 1626577200,
          main: {
            temp: 17.05,
            feels_like: 16.9,
            temp_min: 17.05,
            temp_max: 17.05,
            pressure: 1018,
            sea_level: 1018,
            grnd_level: 1013,
            humidity: 80,
            temp_kf: 0,
          },
          weather: [
            {
              id: 801,
              main: 'Clouds',
              description: 'few clouds',
              icon: '02n',
            },
          ],
          clouds: {
            all: 14,
          },
          wind: {
            speed: 3.34,
            deg: 310,
            gust: 7.05,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'n',
          },
          dt_txt: '2021-07-18 03:00:00',
        },
        {
          dt: 1626588000,
          main: {
            temp: 18.85,
            feels_like: 18.78,
            temp_min: 18.85,
            temp_max: 18.85,
            pressure: 1018,
            sea_level: 1018,
            grnd_level: 1013,
            humidity: 76,
            temp_kf: 0,
          },
          weather: [
            {
              id: 801,
              main: 'Clouds',
              description: 'few clouds',
              icon: '02d',
            },
          ],
          clouds: {
            all: 13,
          },
          wind: {
            speed: 4.15,
            deg: 309,
            gust: 6.2,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2021-07-18 06:00:00',
        },
        {
          dt: 1626598800,
          main: {
            temp: 23.39,
            feels_like: 23.25,
            temp_min: 23.39,
            temp_max: 23.39,
            pressure: 1018,
            sea_level: 1018,
            grnd_level: 1013,
            humidity: 56,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          clouds: {
            all: 5,
          },
          wind: {
            speed: 4.17,
            deg: 308,
            gust: 5.08,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2021-07-18 09:00:00',
        },
        {
          dt: 1626609600,
          main: {
            temp: 27.06,
            feels_like: 27.01,
            temp_min: 27.06,
            temp_max: 27.06,
            pressure: 1017,
            sea_level: 1017,
            grnd_level: 1012,
            humidity: 42,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          clouds: {
            all: 4,
          },
          wind: {
            speed: 4.63,
            deg: 315,
            gust: 5.7,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2021-07-18 12:00:00',
        },
        {
          dt: 1626620400,
          main: {
            temp: 26.93,
            feels_like: 26.86,
            temp_min: 26.93,
            temp_max: 26.93,
            pressure: 1016,
            sea_level: 1016,
            grnd_level: 1011,
            humidity: 41,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          clouds: {
            all: 0,
          },
          wind: {
            speed: 5.74,
            deg: 318,
            gust: 6.22,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2021-07-18 15:00:00',
        },
        {
          dt: 1626631200,
          main: {
            temp: 23.69,
            feels_like: 23.52,
            temp_min: 23.69,
            temp_max: 23.69,
            pressure: 1016,
            sea_level: 1016,
            grnd_level: 1011,
            humidity: 54,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          clouds: {
            all: 0,
          },
          wind: {
            speed: 4.84,
            deg: 328,
            gust: 7.51,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2021-07-18 18:00:00',
        },
        {
          dt: 1626642000,
          main: {
            temp: 19.53,
            feels_like: 19.37,
            temp_min: 19.53,
            temp_max: 19.53,
            pressure: 1017,
            sea_level: 1017,
            grnd_level: 1012,
            humidity: 70,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01n',
            },
          ],
          clouds: {
            all: 0,
          },
          wind: {
            speed: 4.49,
            deg: 317,
            gust: 10.38,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'n',
          },
          dt_txt: '2021-07-18 21:00:00',
        },
        {
          dt: 1626652800,
          main: {
            temp: 17.19,
            feels_like: 16.98,
            temp_min: 17.19,
            temp_max: 17.19,
            pressure: 1017,
            sea_level: 1017,
            grnd_level: 1012,
            humidity: 77,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          clouds: {
            all: 0,
          },
          wind: {
            speed: 4.26,
            deg: 308,
            gust: 10.15,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2021-07-19 00:00:00',
        },
        {
          dt: 1626663600,
          main: {
            temp: 14.94,
            feels_like: 14.81,
            temp_min: 14.94,
            temp_max: 14.94,
            pressure: 1017,
            sea_level: 1017,
            grnd_level: 1012,
            humidity: 89,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          clouds: {
            all: 4,
          },
          wind: {
            speed: 4.43,
            deg: 294,
            gust: 9.53,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2021-07-19 03:00:00',
        },
        {
          dt: 1626674400,
          main: {
            temp: 15.48,
            feels_like: 15.22,
            temp_min: 15.48,
            temp_max: 15.48,
            pressure: 1017,
            sea_level: 1017,
            grnd_level: 1012,
            humidity: 82,
            temp_kf: 0,
          },
          weather: [
            {
              id: 802,
              main: 'Clouds',
              description: 'scattered clouds',
              icon: '03d',
            },
          ],
          clouds: {
            all: 32,
          },
          wind: {
            speed: 5.32,
            deg: 300,
            gust: 9.97,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2021-07-19 06:00:00',
        },
        {
          dt: 1626685200,
          main: {
            temp: 17.73,
            feels_like: 17.39,
            temp_min: 17.73,
            temp_max: 17.73,
            pressure: 1016,
            sea_level: 1016,
            grnd_level: 1011,
            humidity: 70,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04d',
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 5.62,
            deg: 287,
            gust: 9.06,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2021-07-19 09:00:00',
        },
        {
          dt: 1626696000,
          main: {
            temp: 19.63,
            feels_like: 19.19,
            temp_min: 19.63,
            temp_max: 19.63,
            pressure: 1015,
            sea_level: 1015,
            grnd_level: 1010,
            humidity: 59,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04d',
            },
          ],
          clouds: {
            all: 99,
          },
          wind: {
            speed: 4.89,
            deg: 284,
            gust: 9.16,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2021-07-19 12:00:00',
        },
      ],
      city: {
        id: 2950159,
        name: 'Berlin',
        coord: {
          lat: 52.5244,
          lon: 13.4105,
        },
        country: 'DE',
        population: 1000000,
        timezone: 7200,
        sunrise: 1626231620,
        sunset: 1626290621,
      },
    };
    return of(result);
  }
}

describe('CityTempComponent', () => {
  let httpClient: HttpClient;
  let component: CityTempComponent;
  let httpTestingController: HttpTestingController;
  let fixture: ComponentFixture<CityTempComponent>;
  let weatherService: WeatherService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CityTempComponent],
      imports: [HttpClientTestingModule,RouterTestingModule],
      providers: [
        { provide: WeatherService, useClass: watherServ },
      ],
    }).compileComponents();
    weatherService = TestBed.get(WeatherService);
    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get city temperature for next 5 days', () => {
    let cityName = 'Berlin';
    spyOn(component, 'getCityTemp').and.callThrough();
    component.getCityTemp(cityName);
    expect(component.getCityTemp).toHaveBeenCalled();
    setTimeout(() => {
      expect(5).toEqual(component.tempForeCast.length);
    });
  });
});
