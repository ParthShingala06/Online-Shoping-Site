import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  j6(){
    this.router.navigate(['j6']);
  
}
j8(){
  this.router.navigate(['j8']);

}
a8(){
  this.router.navigate(['a8']);

}
new(){
  this.router.navigate(['new']);

}
s10(){
  this.router.navigate(['s10']);

}
m10(){
  this.router.navigate(['m10']);

}
s9(){
  this.router.navigate(['s9']);

}
}
