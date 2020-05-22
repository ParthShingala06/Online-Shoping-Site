import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-computing',
  templateUrl: './computing.component.html',
  styleUrls: ['./computing.component.css']
})
export class ComputingComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  uhd(){
    this.router.navigate(['uhd']);
  
  }

  curved(){
    this.router.navigate(['curved']);
  
  }
  printer(){
    this.router.navigate(['printer']);
  
  }
  tab(){
    this.router.navigate(['tab']);
  
  }
}


