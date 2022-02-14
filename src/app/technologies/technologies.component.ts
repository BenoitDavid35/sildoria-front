import { Component, OnInit } from '@angular/core';
import { DisplayHandlingService } from '../../service/displayHandling/display-handling.service';
import { ApiCallService } from '../../service/api-call/api-call.service';
import { ConnexionService } from '../../service/connexionService/connexion-service.service';
import { ValueFormatterService } from '../../service/value-formatter/value-formatter.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  constructor(private TechHandled: DisplayHandlingService, private apiService: ApiCallService, private Connexion: ConnexionService,public valueFormatter:ValueFormatterService) { }

  economicTechnologies: String = '';
  engineTechnologies: String = '';
  playerTechnologies: String = '';
  weaponTechnologies: String = '';
  url: String = '';
  userTechs: any;
  error: String = '';
  inputValue: any;
  objectToDisplay: string = 'technology';

  ngOnInit(): void  {
    var techType = this.TechHandled.getComponentToDisplay();

    if(techType == 'economics_view'){
      this.economicTechnologies = 'TRUE';
      this.url = 'economics-technologies/';
      this.callserver();
    }
    if(techType == 'weapon_view'){
      this.weaponTechnologies = 'TRUE';
      this.url = 'weapon-technologies/';
      this.callserver();
    }
    if(techType == 'propulsion_view'){
      this.engineTechnologies = 'TRUE';
      this.url = 'propulsion-technologies/';
      this.callserver();
    }
    if(techType == 'player_view'){
      this.playerTechnologies = 'TRUE';
      this.url = 'player-technologies/';
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
      if(resp == 'ERROR_LOADING_TECHNOLOGIES'){
        this.error = 'Erreur lors du chargement des Technologies.'
      }else {
        console.log(resp);
        this.userTechs = resp;
        this.inputValue = resp;
      }
    });
  }

  updateTechs(tech,upOrDown){

    var currentTechLevel;

    switch(tech) {
      case 'metal': {
        currentTechLevel = this.userTechs[0][4];
        break;
      }
      case 'crystal': {
        currentTechLevel = this.userTechs[1][4];
        break;
      }
      case 'gas': {
        currentTechLevel = this.userTechs[2][4];
        break;
      }
      case 'extraction': {
        currentTechLevel = this.userTechs[3][4];
        break;
      }
      case 'energy': {
        currentTechLevel = this.userTechs[4][4];
        break;
      }
      case 'fusion': {
        currentTechLevel = this.userTechs[5][4];
        break;
      }
      case 'chemical_engine': {
        currentTechLevel = this.userTechs[0][4];
        break;
      }
      case 'ion_engine': {
        currentTechLevel = this.userTechs[1][4];
        break;
      }
      case 'microwarp_drive': {
        currentTechLevel = this.userTechs[2][4];
        break;
      }
      case 'quantum_drive': {
        currentTechLevel = this.userTechs[3][4];
        break;
      }
      case 'benalite_engine': {
        currentTechLevel = this.userTechs[4][4];
        break;
      }
      case 'astrophysics': {
        currentTechLevel = this.userTechs[0][4];
        break;
      }
      case 'intergalactic_research_network': {
        currentTechLevel = this.userTechs[1][4];
        break;
      }
      case 'ballistic': {
        currentTechLevel = this.userTechs[2][4];
        break;
      }
      case 'computer': {
        currentTechLevel = this.userTechs[3][4];
        break;
      }
      case 'design': {
        currentTechLevel = this.userTechs[4][4];
        break;
      }
      case 'spy': {
        currentTechLevel = this.userTechs[5][4];
        break;
      }
      case 'weapon': {
        currentTechLevel = this.userTechs[0][4];
        break;
      }
      case 'laser': {
        currentTechLevel = this.userTechs[1][4];
        break;
      }
      case 'photon': {
        currentTechLevel = this.userTechs[2][4];
        break;
      }
      case 'ion': {
        currentTechLevel = this.userTechs[3][4];
        break;
      }
      case 'plasma': {
        currentTechLevel = this.userTechs[4][4];
        break;
      }
      case 'neutron': {
        currentTechLevel = this.userTechs[5][4];
        break;
      }
      case 'electromagnetic': {
        currentTechLevel = this.userTechs[6][4];
        break;
      }
      case 'antimatter': {
        currentTechLevel = this.userTechs[7][4];
        break;
      }
      case 'armor': {
        currentTechLevel = this.userTechs[8][4];
        break;
      }
      case 'shield': {
        currentTechLevel = this.userTechs[9][4];
        break;
      }
    }

    var valueArray = [
      this.Connexion.getClientID(),
      this.Connexion.getSystem(),
      this.Connexion.getIntraPosition(),
      tech,
      currentTechLevel,
      upOrDown
    ];

    var url = 'update-technologies/';

    this.apiService.callServer(url,valueArray)
    .subscribe(resp => {
      if(resp == 'ERROR_LOADING_TECHNOLOGIES'){
        this.error = 'Erreur lors de la mise à jour de la technologie.'
      }else {
        if(resp == 'TECH_LEVEL_SUCCESSFULLY_UPDATED'){
          this.callserver();
        }
      }
    });
  }

}
