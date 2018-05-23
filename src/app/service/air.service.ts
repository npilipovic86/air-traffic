import { HttpClient, HttpParams, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http';

@Injectable()
export class AirService {

  private airSource: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public air$: Observable<any> = this.airSource.asObservable();

  readonly path = '/planes/VirtualRadar/AircraftList.json?';

  constructor(private httpClient: HttpClient) { }

  getData(lat, lng) {
     const params = new HttpParams().set('lat', lat).set('lng', lng).set('fDstL', '0').set('fDstU', '100');
     return this.httpClient.get(this.path, {  params: params }).subscribe(response => {
        this.airSource.next(response);
       });
  }


}
