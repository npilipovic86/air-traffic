import { Component, OnInit, OnDestroy } from '@angular/core';
import { AirService } from '../service/air.service';
import { Air } from '../model/air-data';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  public subscriptionLocation: Subscription;
  public subscriptionAirList: Subscription;
  public location: Coordinates;
  public airplanes;
  public airList: Air;
  public interval: any;

  private locationSource: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public location$: Observable<any> = this.locationSource.asObservable();

  constructor(private airService: AirService) {  }

  ngOnInit() {
    this.load();
    this.getLocation();
    this.interval = setInterval(() => { this.loadData(); }, 60000);
  }
  ngOnDestroy() {
    clearInterval(this.interval);
    if (this.subscriptionAirList) { this.subscriptionAirList.unsubscribe(); }
    if (this.subscriptionLocation) { this.subscriptionLocation.unsubscribe(); }
  }
  load() {
      const data = JSON.parse(localStorage.getItem('planeList'));
      if (data === null || this.location === null) {
        this.loadData();
      } else {
          this.airplanes = data;
      }
    }
  loadData() {
    this.subscriptionLocation = this.location$.subscribe(response => {
        this.airService.getData(response.latitude, response.longitude);
      });
      this.subscriptionAirList = this.airService.air$.subscribe(response => {
        this.airList = response;
        if (this.airList.acList ) {
          this.airplanes = this.airList.acList.sort((obj1, obj2) => obj2.Alt - obj1.Alt);
          localStorage.setItem('planeList', JSON.stringify(this.airList.acList));
        }
      });
    }
  getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          this.location = position.coords;
          this.locationSource.next(this.location);
        },  this.displayError);
      } else {
          alert('Geolocation is not supported by this browser.');
      }
  }
  displayError(error) {
      const errors = {
        1: 'Please allow the location if you want to try skySniffer, press refresh',
        2: 'Position unavailable',
        3: 'Request timeout'
        };
        alert('Error: ' + errors[error.code]);
      }
  }
