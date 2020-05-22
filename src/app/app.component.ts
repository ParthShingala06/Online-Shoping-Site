import { Component } from '@angular/core';
import { FireauthService } from './connection/fireauth.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
  public authService: FireauthService,
    private route: ActivatedRoute,
    private location: Location,
    private router : Router
  ){}
  title = 'samsung';
  logout() {
    this.authService.doLogout()
    .then((res) => {
      this.location.back();
    }, (error) => {
      console.log('Logout error', error);
    });
  }
  end(){
    this.router.navigate(['end']);
  }
}
