import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CITIES } from '../city/cities';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any;
  city:any;
  cities = CITIES;
  postIndex: string| null = '';  // Union type
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  
    console.log("Post: cities"+this.cities);
    this.route.paramMap.subscribe(param => {// deal with the id parameter
     
      this.postIndex = param.get('pid');
  
      // find by index
      this.city = CITIES.find(j => {
          const paramId:string = param.get('cid') || '';
          return j.id === parseInt(paramId)
        }
      );
      console.log("Post: city by id"+this.city);
  
        this.posts = this.city.posts;
  })
}
}