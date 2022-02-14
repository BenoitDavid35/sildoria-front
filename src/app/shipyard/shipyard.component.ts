import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../service/api-call/api-call.service';
import { ConnexionService } from '../../service/connexionService/connexion-service.service';
import { ValueFormatterService } from '../../service/value-formatter/value-formatter.service';

@Component({
  selector: 'app-shipyard',
  templateUrl: './shipyard.component.html',
  styleUrls: ['./shipyard.component.css']
})
export class ShipyardComponent implements OnInit {

  constructor(private apiService: ApiCallService, private Connexion: ConnexionService,public valueFormatter:ValueFormatterService) { }

  fighters: String = '';
  turrets: String = '';
  civilians: String = '';
  logistic: String = '';
  url: String = 'getShips/';
  userUnits: any;
  error: String = '';
  inputValue: any;
  objectToDisplay: string = 'units_building';
  maxUnits: any;
  name: string;

  ngOnInit(): void  {
    this.callserver();
  }

  callserver(){
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
        this.inputValue = resp;
      }
    });
  }

  updateUnits(units,upOrDown){

    var currentUnitLevel;



    var valueArray = [
      this.Connexion.getClientID(),
      this.Connexion.getSystem(),
      this.Connexion.getIntraPosition(),
      units,
      currentUnitLevel,
      upOrDown
    ];

    var url = 'update-units-entities/';

    this.apiService.callServer(url,valueArray)
    .subscribe(resp => {
      if(resp == 'ERROR_LOADING_UNITS'){
        this.error = 'Erreur lors de la mise à jour des unités.'
      }else {
        if(resp == 'UNITS_LEVEL_SUCCESSFULLY_UPDATED'){
          this.callserver();
        }
      }
    });
  }

  maxUnitsFunction(unit){
    var valueArray = [
      this.Connexion.getClientID(),
      this.Connexion.getSystem(),
      this.Connexion.getIntraPosition(),
      unit
    ];

    var url = 'maxUnits/'

    this.apiService.callServer(url,valueArray)
    .subscribe(resp => {
      if(resp == 'ERROR_LOADING_UNITS'){
        this.error = 'Erreur lors du max des Unités.'
      }else {
        console.log(resp);
        this.maxUnits = resp;
        for(var i = 0;i<this.userUnits.length;i++){
          if(this.userUnits[i][3] === unit){
            this.userUnits[i][5] = this.maxUnits;
          }
        }
      }
    });
  }

  inputKeyUp(unit,$event){
    for(var i = 0;i<this.userUnits.length;i++){
      if(this.userUnits[i][3] = unit){
        this.userUnits[i][5] = $event.target.value;
      }
    }
  }

  buildUnits(unit,amount){
    var valueArray = [
      this.Connexion.getClientID(),
      this.Connexion.getSystem(),
      this.Connexion.getIntraPosition(),
      unit,
      amount
    ];

    var url = 'buildUnits/'

    this.apiService.callServer(url,valueArray)
    .subscribe(resp => {
      if(resp == 'ERROR_LOADING_UNITS'){
        this.error = 'Erreur lors de la construction des Unités.'
      }else {
        console.log(resp);
        //load the building bar
        this.inputValue = resp;
      }
    });
  }

}
