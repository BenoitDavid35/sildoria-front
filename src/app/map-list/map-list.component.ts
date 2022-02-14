import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../service/api-call/api-call.service';

@Component({
  selector: 'app-map-list',
  templateUrl: './map-list.component.html',
  styleUrls: ['./map-list.component.css']
})
export class MapListComponent implements OnInit {
  url: string = 'get-map/';
  arrObjectList: any [];
  coordinates_input: number;

  constructor(private apiService: ApiCallService) {
  }

  ngOnInit(): void  {
    this.connectApi(1);
    this.coordinates_input = 1;
  }

  connectApi(location){
    this.coordinates_input = location;
    var valueArray = [location];
    this.apiService.callServer(this.url,valueArray)
    .subscribe(resp => {
        this.arrObjectList = resp as string [];
        console.log(this.arrObjectList);
    });
  }

  connectManual(){
    this.connectApi(this.coordinates_input);
  }

  onKey(event: any) { // without type info
    this.coordinates_input = event.target.value;
  }

}
