import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CITIES } from './../city/cities';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  cityIndex: string | null = '';
  postIndex: string | null = '';
  city: any;
  post: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.cityIndex = params.get('cid');
      this.postIndex = params.get('pid');
      this.city = CITIES.find((city) => {
        const paramCID: string = params.get('cid') || '';
        return city.id === parseInt(paramCID);
      });

      this.post = this.city.posts.find((post: any) => {
        const paramPID: string = params.get('pid') || '';
        return post.id === parseInt(paramPID);
      });
    });
  }
}
