import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {}
    onload(){
      this.router.navigate(['familyhub']);
    
  }

  onLoad(){
    this.router.navigate(['cart']);
  
}
s10(){
  this.router.navigate(['s10']);

}

s9(){
  this.router.navigate(['s9']);

}
smart(){
  this.router.navigate(['smartwatch']);

}

tab(){
  this.router.navigate(['tab']);

}
}
