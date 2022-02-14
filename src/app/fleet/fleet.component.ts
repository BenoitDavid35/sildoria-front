import { Component, OnInit } from '@angular/core';
import { ValueFormatterService } from '../../service/value-formatter/value-formatter.service';
import { ConnexionService } from '../../service/connexionService/connexion-service.service';
import { ApiCallService } from '../../service/api-call/api-call.service';

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.css']
})
export class FleetComponent implements OnInit {

  constructor(private apiService: ApiCallService,public valueFormatter:ValueFormatterService, private Connexion: ConnexionService) { }

  url: string = "getFleets/";
  fleets: any;
  error: string = '';
  noFleets: string = '';
  createNewFleetWidget: string = '';
  noMission: string = '';
  fleetWidget: string = '';

  ngOnInit(): void  {
    this.createNewFleetWidget = '';
    this.noFleets = '';
    var valueArray = [
      this.Connexion.getClientID()
    ];

    this.apiService.callServer(this.url,valueArray)
    .subscribe(resp => {
      if(resp == 'ERROR_LOADING_FLEETS'){
        this.error = 'Erreur lors du chargement des flottes.'
      }else {
        console.log(resp);
        this.fleets = resp;
        if(this.fleets === 'NO_FLEETS_FOR_USER'){
          this.noFleets = 'TRUE';
        }else{
          this.noFleets = '';
          if(this.noMission === 'NULL'){
            this.noMission = '';
          }else{
            this.noMission = 'TRUE';
          }
        }
      }
    });
  }

  createNewFleet(){
    if(this.createNewFleetWidget === ''){
      this.createNewFleetWidget = 'TRUE';
    }else{
      this.createNewFleetWidget = '';
      this.ngOnInit();
    }
  }

  fleetWidgetFunction(fleet){
    if(this.fleetWidget === ''){
      this.fleetWidget = fleet;
    }else{
      this.fleetWidget = '';
      this.ngOnInit();
    }
  }

  }
