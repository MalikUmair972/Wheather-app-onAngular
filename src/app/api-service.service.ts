import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private baseUrl = 'https://goweather.herokuapp.com/weather';

  constructor(private http: HttpClient) {}

  getWeatherByCountry(country: string) {
    const url = `${this.baseUrl}/${country}`; 
    return this.http.get(url);
  }
}
