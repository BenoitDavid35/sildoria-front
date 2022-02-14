import { Component, OnInit, Input } from '@angular/core';
import { ValueFormatterService } from '../../service/value-formatter/value-formatter.service';
import { ConnexionService } from '../../service/connexionService/connexion-service.service';
import { ApiCallService } from '../../service/api-call/api-call.service';

@Component({
  selector: 'app-fleet-action',
  templateUrl: './fleet-action.component.html',
  styleUrls: ['./fleet-action.component.css']
})
export class FleetActionComponent implements OnInit {

  constructor(private apiService: ApiCallService,public valueFormatter:ValueFormatterService, private Connexion: ConnexionService) { }

  @Input() fleet: string[];
  url: string = 'getOneFleet/';
  fleetContent: any;
  previousMissionEvent: any;
  availableMissions: any;

  ngOnInit(): void {
    this.availableMissions = {
      'mining': false,
      'attack': false,
      'transport': false,
      'espionnage': false,
      'occupation': false,
      'deplacement': false,
      'recycling': false,
      'exploration': false
    };
    var valueArray = [
      this.Connexion.getClientID(),
      this.fleet[0]
    ];

    this.apiService.callServer(this.url,valueArray)
    .subscribe(resp => {
      if(resp == 'ERROR_LOADING_FLEET'){
        console.log('ERROR_LOADING_FLEET');
        // this.error = 'Erreur lors du chargement de la flotte.'
      }else {
        console.log(resp);
        this.fleetContent = resp;
        this.setSliders();
      }
    });
  }

  setSliders(){
    for(var i = 0;i<this.fleetContent[7].length;i++){
      this.fleetContent[7][i].push({
          floor: 0,
          ceil: this.fleetContent[7][i][1]
        })
      }
    }

    checkAvailableMissions(){
      if(this.fleetContent[4] != "" && this.fleetContent[5] != ""){
        var valueArray = [
          this.fleetContent[4],
          this.fleetContent[5]
        ];

        let url = 'getRandomPlanetInformations/'

        this.apiService.callServer(url,valueArray)
        .subscribe(resp => {
          if(resp == 'ERROR_LOADING_PLANET_INFORMATIONS'){
            console.log('ERROR_LOADING_PLANET_INFORMATIONS');
            // this.error = 'Erreur lors du chargement de la flotte.'
          }else {
            console.log(resp);
            this.availableMissions = resp;
          }
        });
      }
    }

    missionSelector(event,missionType){
      event.target.classList.add('border');
      if(this.previousMissionEvent != undefined){
        this.previousMissionEvent.classList.remove('border');
      }
      this.fleetContent[6] = missionType;
      this.previousMissionEvent = event.target;
      console.log(this.fleetContent);
    }

  // updateFleet(){}
  // deleteFleet(){}

}
