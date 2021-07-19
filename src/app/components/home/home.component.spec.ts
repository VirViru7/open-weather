import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { WeatherService } from 'src/core/services/weather.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
// Other imports
import { HttpClient } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';

class weatherServ {
  getCitites() {
    let result = {
      cnt: 5,
      list: [
        {
          coord: {
            lon: 2.3488,
            lat: 48.8534,
          },
          sys: {
            country: 'FR',
            timezone: 7200,
            sunrise: 1626667653,
            sunset: 1626723952,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          main: {
            temp: 291.35,
            feels_like: 291.47,
            temp_min: 289.26,
            temp_max: 292.67,
            pressure: 1020,
            humidity: 86,
          },
          visibility: 10000,
          wind: {
            speed: 1.34,
            deg: 41,
          },
          clouds: {
            all: 0,
          },
          dt: 1626671368,
          id: 2988507,
          name: 'Paris',
        },
        {
          coord: {
            lon: 13.4105,
            lat: 52.5244,
          },
          sys: {
            country: 'DE',
            timezone: 7200,
            sunrise: 1626664006,
            sunset: 1626722289,
          },
          weather: [
            {
              id: 802,
              main: 'Clouds',
              description: 'scattered clouds',
              icon: '03d',
            },
          ],
          main: {
            temp: 288.59,
            feels_like: 288.12,
            temp_min: 288.14,
            temp_max: 289.4,
            pressure: 1017,
            humidity: 74,
          },
          visibility: 10000,
          wind: {
            speed: 4.47,
            deg: 304,
          },
          clouds: {
            all: 40,
          },
          dt: 1626671358,
          id: 2950159,
          name: 'Berlin',
        },
        {
          coord: {
            lon: -85.1647,
            lat: 34.257,
          },
          sys: {
            country: 'US',
            timezone: -14400,
            sunrise: 1626691348,
            sunset: 1626742266,
          },
          weather: [
            {
              id: 501,
              main: 'Rain',
              description: 'moderate rain',
              icon: '10n',
            },
            {
              id: 701,
              main: 'Mist',
              description: 'mist',
              icon: '50n',
            },
          ],
          main: {
            temp: 295.7,
            feels_like: 296.44,
            temp_min: 294.27,
            temp_max: 296.86,
            pressure: 1019,
            humidity: 93,
          },
          visibility: 4023,
          wind: {
            speed: 2.06,
            deg: 220,
          },
          clouds: {
            all: 90,
          },
          dt: 1626671378,
          id: 4219762,
          name: 'Rome',
        },
        {
          coord: {
            lon: 14.4208,
            lat: 50.088,
          },
          sys: {
            country: 'CZ',
            timezone: 7200,
            sunrise: 1626664442,
            sunset: 1626721369,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          main: {
            temp: 291.18,
            feels_like: 291.34,
            temp_min: 289.51,
            temp_max: 292.77,
            pressure: 1018,
            humidity: 88,
          },
          visibility: 10000,
          wind: {
            speed: 2.57,
            deg: 250,
          },
          clouds: {
            all: 0,
          },
          dt: 1626671357,
          id: 3067696,
          name: 'Prague',
        },
        {
          coord: {
            lon: -9.1333,
            lat: 38.7167,
          },
          sys: {
            country: 'PT',
            timezone: 3600,
            sunrise: 1626672415,
            sunset: 1626724702,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'broken clouds',
              icon: '04n',
            },
          ],
          main: {
            temp: 290.57,
            feels_like: 290.43,
            temp_min: 289.73,
            temp_max: 291.51,
            pressure: 1016,
            humidity: 79,
          },
          visibility: 10000,
          wind: {
            speed: 7.2,
            deg: 330,
          },
          clouds: {
            all: 75,
          },
          dt: 1626671366,
          id: 2267057,
          name: 'Lisbon',
        },
      ],
    };
    return of(result);
  }
}

describe('HomeComponent', () => {
  let httpClient: HttpClient;
  let component: HomeComponent;
  let httpTestingController: HttpTestingController;
  let fixture: ComponentFixture<HomeComponent>;
  let weatherService: WeatherService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientTestingModule,RouterTestingModule],
      providers: [{ provide: WeatherService, useClass: weatherServ }],
    }).compileComponents();
    weatherService = TestBed.get(WeatherService);
    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get weather info for 5 europian citties', () => {
    spyOn(component, 'getCities').and.callThrough();
    component.getCities();
    expect(component.getCities).toHaveBeenCalled();
    setTimeout(() => {
      expect(5).toEqual(component.cities.length);
    });
  });
});
