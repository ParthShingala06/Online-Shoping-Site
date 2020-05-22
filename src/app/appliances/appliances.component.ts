import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-appliances',
  templateUrl: './appliances.component.html',
  styleUrls: ['./appliances.component.css']
})
export class AppliancesComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  wm(){
    this.router.navigate(['wm']);
  
  }
  f4(){
    this.router.navigate(['f4']);
  
  }
  fd(){
    this.router.navigate(['fd']);
  
  }
  oven(){
    this.router.navigate(['oven']);
  
  }
  air(){
    this.router.navigate(['air']);
  
  }
  stainless(){
    this.router.navigate(['stainless']);
  
  }
  fh(){
    this.router.navigate(['familyhub']);
  
  }

}
