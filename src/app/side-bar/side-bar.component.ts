import { Component, OnInit } from '@angular/core';
import { CITIES } from './../city/cities';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cities = CITIES;
}
