import { Component } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Weather-app';
  weatherData: any;
  country: string = '';
  inputValue: string = ''; 

  constructor(private weatherService: ApiServiceService) {}

  searchWeather() {
    this.country = this.inputValue
    if (!this.country.trim()) {
      return;
    }

    this.weatherService.getWeatherByCountry(this.country).subscribe(
      (data: any) => {
        this.weatherData = data;
      },
      (error) => {
        alert('Error fetching weather data. Please try again.');
      }
    );
  }
}
