import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tvav',
  templateUrl: './tvav.component.html',
  styleUrls: ['./tvav.component.css']
})
export class TvavComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  curved(){
    this.router.navigate(['curved']);
  
  }
  pt(){
    this.router.navigate(['premium']);
  
  }
  led(){
    this.router.navigate(['led']);
  
  }
  uhd(){
    this.router.navigate(['uhd']);
  
  }
  speaker(){
    this.router.navigate(['speaker']);
  
  }
}
