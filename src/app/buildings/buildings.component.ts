import { Component, OnInit } from '@angular/core';
import { DisplayHandlingService } from '../../service/displayHandling/display-handling.service';
import { ApiCallService } from '../../service/api-call/api-call.service';
import { ConnexionService } from '../../service/connexionService/connexion-service.service';
import { ValueFormatterService } from '../../service/value-formatter/value-formatter.service';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {

  constructor(private BuildingHandled: DisplayHandlingService, private apiService: ApiCallService, private Connexion: ConnexionService,public valueFormatter:ValueFormatterService) { }

  productionBuildings: String = '';
  industrialBuildings: String = '';
  url: String = '';
  userBuildings: any;
  error: String = '';
  inputValue: any;
  objectToDisplay: string = 'building';

  ngOnInit(): void  {
    var buildingType = this.BuildingHandled.getComponentToDisplay();

    if(buildingType == 'production_view'){
      this.productionBuildings = 'TRUE';
      this.url = 'production-buildings/';
      this.callserver();
    }
    if(buildingType == 'industry_view'){
      this.industrialBuildings = 'TRUE';
      this.url = 'industry-buildings/';
      this.callserver();
    }
  }

  callserver(){
    var valueArray = [
      this.Connexion.getClientID(),
      this.Connexion.getSystem(),
      this.Connexion.getIntraPosition()
    ];

    this.apiService.callServer(this.url,valueArray)
    .subscribe(resp => {
      if(resp == 'ERROR_LOADING_BUILDINGS'){
        this.error = 'Erreur lors du chargement des Batiments.'
      }else {
        console.log(resp);
        this.userBuildings = resp;
        this.inputValue = resp;
      }
    });
  }

  updateBuilding(building,upOrDown){

    var currentBuildingLevel;

    switch(building) {
      case 'metal_mine': {
        currentBuildingLevel = this.userBuildings[0][4];
        break;
      }
      case 'crystal_mine': {
        currentBuildingLevel = this.userBuildings[1][4];
        break;
      }
      case 'gas_mine': {
        currentBuildingLevel = this.userBuildings[2][4];
        break;
      }
      case 'solar_mine': {
        currentBuildingLevel = this.userBuildings[3][4];
        break;
      }
      case 'fusion_reactor': {
        currentBuildingLevel = this.userBuildings[4][4];
        break;
      }
      case 'metal_warehouse': {
        currentBuildingLevel = this.userBuildings[5][4];
        break;
      }
      case 'crystal_warehouse': {
        currentBuildingLevel = this.userBuildings[6][4];
        break;
      }
      case 'gas_warehouse': {
        currentBuildingLevel = this.userBuildings[7][4];
        break;
      }
      case 'waste_factory': {
        currentBuildingLevel = this.userBuildings[8][4];
        break;
      }
      case 'planet_engineering_complex': {
        currentBuildingLevel = this.userBuildings[0][4];
        break;
      }
      case 'robotic_center': {
        currentBuildingLevel = this.userBuildings[1][4];
        break;
      }
      case 'spaceport': {
        currentBuildingLevel = this.userBuildings[2][4];
        break;
      }
      case 'laboratory': {
        currentBuildingLevel = this.userBuildings[3][4];
        break;
      }
      case 'experimental_research_center': {
        currentBuildingLevel = this.userBuildings[4][4];
        break;
      }
      case 'rare_ressource_research_center': {
        currentBuildingLevel = this.userBuildings[5][4];
        break;
      }
      case 'military_factory': {
        currentBuildingLevel = this.userBuildings[6][4];
        break;
      }
      case 'supercalculator': {
        currentBuildingLevel = this.userBuildings[7][4];
        break;
      }
      case 'alliance_center': {
        currentBuildingLevel = this.userBuildings[8][4];
        break;
      }
      case 'design_center': {
        currentBuildingLevel = this.userBuildings[9][4];
        break;
      }
      case 'missile_silo': {
        currentBuildingLevel = this.userBuildings[10][4];
        break;
      }
    }

    console.log(currentBuildingLevel);

    var valueArray = [
      this.Connexion.getClientID(),
      this.Connexion.getSystem(),
      this.Connexion.getIntraPosition(),
      building,
      currentBuildingLevel,
      upOrDown
    ];

    var url = 'update-building/';

    this.apiService.callServer(url,valueArray)
    .subscribe(resp => {
      if(resp == 'ERROR_LOADING_BUILDINGS'){
        this.error = 'Erreur lors de la destruction du batiment.'
      }else {
        if(resp == 'BUILDING_LEVEL_SUCCESSFULLY_UPDATED'){
          this.callserver();
        }
      }
    });
  }

}
