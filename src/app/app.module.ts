import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AirService } from './service/air.service';
import { FlightDetailsComponent } from './flight-details/flight-details.component';



const appRoutes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' }, // main
  { path: 'main', component: MainComponent },
  { path: 'airplane/:id', component: FlightDetailsComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FlightDetailsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false
      }
    )
  ],
  providers: [
    AirService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
