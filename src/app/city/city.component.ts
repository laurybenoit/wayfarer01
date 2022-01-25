import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { CITIES } from './cities'
import {SearchService } from '../search/search.service'; // import the service
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  city:any;
  weather: any;
  cities = CITIES;
  cityIndex: string| null = '';  // Union type
  searchSubject = new Subject();
 
  constructor(private route: ActivatedRoute, private searchService: SearchService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {// deal with the id parameter
    
      this.cityIndex = param.get('id');
  
      // find by index
      this.city = CITIES.find(j => {
          const paramId:string = param.get('cid') || '';
          return j.id === parseInt(paramId)
        });
        console.log("City Details: city"+this.city.id);
  // find weather data
       // listen to the event
    
      //  this.searchService.createAPIObservable("41042")
      //  .subscribe((response) => {
      //    console.log(response);
      //    this.weather = response;
      //  });
      
  })

}
}

