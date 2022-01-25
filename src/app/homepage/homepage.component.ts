import { Component, OnInit } from '@angular/core';
import {SearchService } from './../search/search.service'
import { debounceTime, Subject } from 'rxjs'; // observable

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],

})
export class HomepageComponent implements OnInit {
  weather: any;
  searchSubject = new Subject();
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {  // listen to the event
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
