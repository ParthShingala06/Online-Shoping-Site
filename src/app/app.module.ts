import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {RouterModule} from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';

import { AuthGuard } from './connection/auth.guard';
import { FireauthService } from './connection/fireauth.service';
import { StudentService } from './connection/student.service';

import { FamilyhubComponent } from './familyhub/familyhub.component';
import { TabComponent } from './tab/tab.component';
import { Note9Component } from './note9/note9.component';
import { S10Component } from './s10/s10.component';
import { ComboComponent } from './combo/combo.component';
import { SmartwatchComponent } from './smartwatch/smartwatch.component';
import { MobileComponent } from './mobile/mobile.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { TvavComponent } from './tvav/tvav.component';
import { ComputingComponent } from './computing/computing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { ConnectionComponent } from './connection/connection.component';

import { environment } from '../environments/environment';
import { J8Component } from './j8/j8.component';
import { J6Component } from './j6/j6.component';
import { M10Component } from './m10/m10.component';
import { A8Component } from './a8/a8.component';
import { S9Component } from './s9/s9.component';
import { CurvedComponent } from './curved/curved.component';
import { UhdComponent } from './uhd/uhd.component';
import { PremiumComponent } from './premium/premium.component';
import { LedComponent } from './led/led.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { FdComponent } from './fd/fd.component';
import { F4Component } from './f4/f4.component';
import { StainlessComponent } from './stainless/stainless.component';
import { WmComponent } from './wm/wm.component';
import { OvenComponent } from './oven/oven.component';
import { AirComponent } from './air/air.component';
import { PrinterComponent } from './printer/printer.component';
import { EndComponent } from './end/end.component';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    FamilyhubComponent,
    TabComponent,
    Note9Component,
    S10Component,
    ComboComponent,
    SmartwatchComponent,
    MobileComponent,
    AppliancesComponent,
    TvavComponent,
    ComputingComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    ConnectionComponent,
    J8Component,
    J6Component,
    M10Component,
    A8Component,
    S9Component,
    CurvedComponent,
    UhdComponent,
    PremiumComponent,
    LedComponent,
    SpeakerComponent,
    FdComponent,
    F4Component,
    StainlessComponent,
    WmComponent,
    OvenComponent,
    AirComponent,
    PrinterComponent,
    EndComponent,
    NewComponent
  ],
  imports: [
     BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, 
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      {path : 'carousel' , component : CarouselComponent },



      {path : 'mobile' , component : MobileComponent},
      {path : 'tvav' , component : TvavComponent},
      {path : 'computing' , component : ComputingComponent},
      {path : 'appliances' , component : AppliancesComponent},

      {path : 'familyhub' , component : FamilyhubComponent},
      {path : 'tab' , component : TabComponent},
      {path : 'note9' , component : Note9Component},
      {path : 's10' , component : S10Component},
      {path : 'combo' , component : ComboComponent},
      {path : 'signup' , component : SignupComponent, canActivate: [AuthGuard]},
      {path : 'login' , component : LoginComponent, canActivate: [AuthGuard]},
      {path : 'cart' , component : CartComponent},
      {path : 'smartwatch' , component : SmartwatchComponent},
      {path : 'j6' , component : J6Component},
      {path : 'j8  ' , component : J8Component},
      {path : 'a8' , component : A8Component},
      {path : 'm10' , component : M10Component},
      {path : 'note9' , component : Note9Component},
      {path : 'uhd' , component : UhdComponent},
      {path : 'new' , component : NewComponent},
      {path : 'premium' , component : PremiumComponent},
      {path : 'led' , component : LedComponent},
      {path : 'curved' , component : CurvedComponent},
      {path : 'speaker' , component : SpeakerComponent},
      {path : 'fd' , component : FdComponent},
      {path : 'f4' , component : F4Component},
      {path : 'stainless' , component : StainlessComponent},
      {path : 'air' , component : AirComponent},
      {path : 'oven' , component : OvenComponent},
      {path : 'wm' , component : WmComponent},
      {path : 'printer' , component : PrinterComponent},
      {path : 'end' , component : EndComponent},
      {path : 's9' , component : S9Component}
    ]),
    BrowserAnimationsModule
  ],
  providers: [ FireauthService, AuthGuard,StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
