import { Component, OnInit } from '@angular/core';

import { debounceTime, Subject } from 'rxjs'; // observable
import {SearchService } from './search.service'; // import the service

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  zip: string = '';
  weather: any;
  unit:string = '';
  searchSubject = new Subject();
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    // listen to the event
    this.searchSubject
    .pipe(debounceTime(1000))// pipe transform a format debounceTime delay 
    .subscribe(zip => {
      console.log(zip);
    this.searchService.createAPIObservable(zip)
    .subscribe((response) => {
      console.log(response);
      this.weather = response;
    });
    })
}
findWeather(zip: string, unit:string): void {
this.searchSubject.next(zip); // track zip change
}

}
