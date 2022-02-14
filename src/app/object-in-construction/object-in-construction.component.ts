import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ApiCallService } from '../../service/api-call/api-call.service';
import { ConnexionService } from '../../service/connexionService/connexion-service.service';
import { ValueFormatterService } from '../../service/value-formatter/value-formatter.service';
import { interval, Subscription } from 'rxjs';
//https://stackoverflow.com/questions/58710341/how-to-reload-or-refresh-only-child-component-in-angular-8
//https://medium.com/front-end-weekly/easy-custom-progress-bar-in-angular-cb2670bb2d02

@Component({
  selector: 'app-object-in-construction',
  templateUrl: './object-in-construction.component.html',
  styleUrls: ['./object-in-construction.component.css']
})
export class ObjectInConstructionComponent implements OnInit {
  @Input() someInput: string;
  @Input() objectToDisplay: string;
  @Input() squareOrLineDisplay: string;

  constructor(private apiService: ApiCallService, private Connexion: ConnexionService, private valueFormatter: ValueFormatterService) { }

  subscription: Subscription;
  userObject: any;
  error: string = '';
  progress: number;
  total: number;
  timeLeft: number;
  timeLeftFormatted: string = "s";
  squareDisplay: string = "";
  lineDisplay: string = "";
  unit_building: string = "";

  ngOnInit(): void  {
    var url = "getObjectInConstruction/";
    // console.log(this.objectToDisplay);
    var valueArray = [
      this.Connexion.getClientID(),
      this.Connexion.getSystem(),
      this.Connexion.getIntraPosition(),
      this.objectToDisplay
    ];

    this.apiService.callServer(url,valueArray)
    .subscribe(resp => {
      if(resp == 'ERROR_LOADING_OBJECT'){
        this.error = 'Erreur lors du chargement de l\'objet en construction.';
      }else {
        this.userObject = resp;
        const source = interval(1000);
        this.subscription = source.subscribe(val => this.calculatePercent());
      }
    });
    if(this.squareOrLineDisplay == "square"){
      this.squareDisplay = 'true';
    }else{
      this.lineDisplay = 'true';
    }
    if(this.objectToDisplay == "units_building"){
      this.unit_building = 'true';
    }
  }

  ngOnChanges() {
    /**********THIS FUNCTION WILL TRIGGER WHEN PARENT COMPONENT UPDATES 'someInput'**************/
    //Write your code here
    this.ngOnInit();
  }

  cancelObject(){
    var url = "cancelObjectConstruction/";

    switch (this.objectToDisplay){
      case 'building':
      var valueArray = [
        this.Connexion.getClientID(),
        this.Connexion.getSystem(),
        this.Connexion.getIntraPosition(),
        this.userObject.building,
        this.objectToDisplay
      ];
      break
      case 'technology':
      var valueArray = [
        this.Connexion.getClientID(),
        this.Connexion.getSystem(),
        this.Connexion.getIntraPosition(),
        this.userObject.technology,
        this.objectToDisplay
      ];
      break;
      case 'units':
      var valueArray = [
        this.Connexion.getClientID(),
        this.Connexion.getSystem(),
        this.Connexion.getIntraPosition(),
        this.userObject.units,
        this.objectToDisplay
      ];
      break;
    }

    this.apiService.callServer(url,valueArray)
    .subscribe(resp => {
      if(resp == 'ERROR_LOADING_OBJECT'){
        this.error = 'Erreur lors du chargement du batiment en construction.'
      }else {
        this.userObject = resp;
      }
    });
  }

  calculatePercent(){
    if(this.userObject){
      if(Object.keys(this.userObject).length){
        var currentTimestamp: number =  Math.floor(Date.now() / 1000);
        this.total = this.userObject.end_timestamp - this.userObject.start_timestamp;
        this.progress = currentTimestamp - this.userObject.start_timestamp;
        this.timeLeft = this.userObject.end_timestamp - currentTimestamp;
        if(this.progress > this.total){
          this.userObject = '';
        }
        this.progress = +(((this.progress / this.total) * 100).toFixed(2));
      }
      this.timeLeftFormatted = this.valueFormatter.getDateFormattedFromTimestamp(this.timeLeft);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
