import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ValueFormatterService } from '../../service/value-formatter/value-formatter.service';
import { ConnexionService } from '../../service/connexionService/connexion-service.service';
import { ApiCallService } from '../../service/api-call/api-call.service';

@Component({
  selector: 'app-create-new-fleet',
  templateUrl: './create-new-fleet.component.html',
  styleUrls: ['./create-new-fleet.component.css']
})
export class CreateNewFleetComponent implements OnInit {

  constructor(private apiService: ApiCallService,public valueFormatter:ValueFormatterService, private Connexion: ConnexionService) { }

  @Output() returnToMother = new EventEmitter();
  url: string = "unitsOnPlanet/";
  userUnits: any;
  error: string = '';
  outputValue: number;
  value: number;
  fleetName: string = '';
  fleetCreationAnswer: any;

  ngOnInit(): void  {
    var valueArray = [
      this.Connexion.getClientID(),
      this.Connexion.getSystem(),
      this.Connexion.getIntraPosition()
    ];

    this.apiService.callServer(this.url,valueArray)
    .subscribe(resp => {
      if(resp == 'ERROR_LOADING_UNITS'){
        this.error = 'Erreur lors du chargement des Unités.'
      }else {
        console.log(resp);
        this.userUnits = resp;
        this.setSliders();
      }
    });
  }

  setSliders(){
    for(var i = 0;i<this.userUnits.length;i++){
      this.userUnits[i].push(0)
      this.userUnits[i].push({
          floor: 0,
          ceil: this.userUnits[i][1]
        })
      }
    }

    createFleet(){
      var url = 'setFleet/'
      var valueArray = [
        this.Connexion.getClientID(),
        this.Connexion.getSystem(),
        this.Connexion.getIntraPosition(),
        this.userUnits,
        this.fleetName
      ];

      this.apiService.callServer(url,valueArray)
      .subscribe(resp => {
        if(resp == 'ERROR_CREATING_FLEET'){
          this.error = 'Erreur lors de la création des flottes.'
        }else {
          // console.log(resp);
          this.fleetCreationAnswer = resp;
          if(resp === 'FLEET_SUCCESSFULLY_CREATED'){
            this.returnToMother.emit();
          }
        }
      });
    }

    returnToMotherFunction(){
      this.returnToMother.emit();
    }
}
