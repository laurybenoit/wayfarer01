import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CITIES } from '../city/cities';
import {SearchService } from './../search/search.service'
import { debounceTime, Subject } from 'rxjs'; // observable

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class SlideComponent implements OnInit {
  cities = CITIES;
  images = this.cities.map((n) => n.image);
  weather: any;
  searchSubject = new Subject();
  constructor(private searchService: SearchService,config: NgbCarouselConfig) { 
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.showNavigationIndicators= false;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.animation= true;
  }


  ngOnInit(): void {  // listen to the event
    console.log("---Slide ==> onInit----");

    this.searchSubject
   // .pipe(debounceTime(1000))// pipe transform a format debounceTime delay 
    .subscribe(zip => {
      console.log("Slide ==> zip info :"+ zip);
    this.searchService.createAPIObservable('41042')
    .subscribe((response) => {
      console.log("Slide ==> weather object info :"+ response);
      this.weather = response;
    });
    })
}
findWeather(zip: string, unit:string): void {
this.searchSubject.next(zip); // track zip change
}

}



