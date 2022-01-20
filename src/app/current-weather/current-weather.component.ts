import { Component, OnInit } from '@angular/core';

import { ICurrentWeather } from '../interfaces';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather
  constructor() {
    this.current = {
      city: 'Dallas',
      country: 'USA',
      date: new Date(),
      image: 'assets/img/01_Sun.png',
      temperature: 88,
      description: 'sunny',
    } as ICurrentWeather
  }

  ngOnInit(){
  }

}
