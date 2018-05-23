import { Component, OnInit } from '@angular/core';
import { AirService } from '../service/air.service';
import { ActivatedRoute } from '@angular/router';
import { Air, AcListEntity } from '../model/air-data';


@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {
  public id: number;
  public airplane;
  public airplaneList;

  constructor(private airService: AirService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.load();
  }
  load() {
    this.route.params.subscribe(params => {this.id = +params.id; });
    this.airplaneList = JSON.parse(localStorage.getItem('planeList'));
    this.airplane = this.airplaneList.find(item => item.Id === this.id);
}

}
