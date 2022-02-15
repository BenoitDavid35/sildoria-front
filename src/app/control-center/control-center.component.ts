import { Component, OnInit } from '@angular/core';
import { DisplayHandlingService } from '../../service/displayHandling/display-handling.service';
import { ApiCallService } from '../../service/api-call/api-call.service';
import { ConnexionService } from '../../service/connexionService/connexion-service.service';
import { ValueFormatterService } from '../../service/value-formatter/value-formatter.service';

@Component({
  selector: 'app-control-center',
  templateUrl: './control-center.component.html',
  styleUrls: ['./control-center.component.css']
})
export class ControlCenterComponent implements OnInit {

  constructor(private UnitHandled: DisplayHandlingService, private apiService: ApiCallService, private Connexion: ConnexionService,public valueFormatter:ValueFormatterService) { }

  fighters: String = '';
  turrets: String = '';
  civilians: String = '';
  logistic: String = '';
  url: String = '';
  userUnits: any;
  error: String = '';
  inputValue: any;
  objectToDisplay: string = 'units_control_center';

  ngOnInit(): void  {
    var unitType = this.UnitHandled.getComponentToDisplay();

    if(unitType == 'fighters'){
      this.fighters = 'TRUE';
      this.url = 'fighting-ships-control-center/';
      this.callserver();
    }
    if(unitType == 'turrets'){
      this.turrets = 'TRUE';
      this.url = 'turrets-control-center/';
      this.callserver();
    }
    if(unitType == 'civilians'){
      this.civilians = 'TRUE';
      this.url = 'civilians-control-center/';
      this.callserver();
    }
    if(unitType == 'logistic'){
      this.logistic = 'TRUE';
      this.url = 'logistic-control-center/';
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
      if(resp == 'ERROR_LOADING_UNITS'){
        this.error = 'Erreur lors du chargement des Unités.'
      }else {
        console.log(resp);
        this.userUnits = resp;
        this.inputValue = resp;
      }
    });
  }

  updateUnits(units: any,upOrDown: any){

    var currentUnitLevel;

    switch(units) {
      case 'laser_turret':
      currentUnitLevel = this.userUnits[0][4];
      break;
      case 'photon_turret':
      currentUnitLevel = this.userUnits[1][4];
      break;
      case 'ion_turret':
      currentUnitLevel = this.userUnits[2][4];
      break;
      case 'plasma_turret':
      currentUnitLevel = this.userUnits[3][4];
      break;
      case 'gauss_turret':
      currentUnitLevel = this.userUnits[4][4];
      break;
      case 'neutron_turret':
      currentUnitLevel = this.userUnits[5][4];
      break;
      case 'antimatter_turret':
      currentUnitLevel = this.userUnits[6][4];
      break;
      case 'small_shield':
      currentUnitLevel = this.userUnits[7][4];
      break;
      case 'big_shield':
      currentUnitLevel = this.userUnits[8][4];
      break;
      case 'ballistic_missile':
      currentUnitLevel = this.userUnits[9][4];
      break;
      case 'spatial_mine':
      currentUnitLevel = this.userUnits[10][4];
      break;
      case 'defensive_satellite':
      currentUnitLevel = this.userUnits[11][4];
      break;
      case 'heavy_defensive_satellite':
      currentUnitLevel = this.userUnits[12][4];
      break;
      case 'fighter':
      currentUnitLevel = this.userUnits[0][4];
      break;
      case 'improved_fighter':
      currentUnitLevel = this.userUnits[1][4];
      break;
      case 'light_cruiser':
      currentUnitLevel = this.userUnits[2][4];
      break;
      case 'bomb_cruiser':
      currentUnitLevel = this.userUnits[3][4];
      break;
      case 'line_cruiser':
      currentUnitLevel = this.userUnits[4][4];
      break;
      case 'battleship':
      currentUnitLevel = this.userUnits[5][4];
      break;
      case 'line_battleship':
      currentUnitLevel = this.userUnits[6][4];
      break;
      case 'fleet_destructor':
      currentUnitLevel = this.userUnits[7][4];
      break;
      case 'titan_destructor':
      currentUnitLevel = this.userUnits[8][4];
      break;
      case 'titan_1':
      currentUnitLevel = this.userUnits[9][4];
      break;
      case 'titan_2':
      currentUnitLevel = this.userUnits[10][4];
      break;
      case 'titan_3':
      currentUnitLevel = this.userUnits[11][4];
      break;
      case 'titan_4':
      currentUnitLevel = this.userUnits[12][4];
      break;
      case 'spy_probe':
      currentUnitLevel = this.userUnits[13][4];
      break;
      case 'small_transporter':
      currentUnitLevel = this.userUnits[0][4];
      break;
      case 'big_transporter':
      currentUnitLevel = this.userUnits[1][4];
      break;
      case 'planet_extractor':
      currentUnitLevel = this.userUnits[2][4];
      break;
      case 'nebulae_extractor':
      currentUnitLevel = this.userUnits[3][4];
      break;
      case 'black_hole_extractor':
      currentUnitLevel = this.userUnits[4][4];
      break;
      case 'asteroid_field_extractor':
      currentUnitLevel = this.userUnits[5][4];
      break;
      case 'colonization_ship':
      currentUnitLevel = this.userUnits[6][4];
      break;
      case 'recycling_ship':
      currentUnitLevel = this.userUnits[7][4];
      break;
      case 'solar_satellite':
      currentUnitLevel = this.userUnits[8][4];
      break;
      case 'hunter_carrier':
      currentUnitLevel = this.userUnits[0][4];
      break;
      case 'shield_destructor':
      currentUnitLevel = this.userUnits[1][4];
      break;
      case 'boarding_vessel':
      currentUnitLevel = this.userUnits[2][4];
      break;
      case 'interplanetary_missile':
      currentUnitLevel = this.userUnits[3][4];
      break;
    }

    var valueArray = [
      this.Connexion.getClientID(),
      this.Connexion.getSystem(),
      this.Connexion.getIntraPosition(),
      units,
      currentUnitLevel,
      upOrDown
    ];

    var url = 'update-units/';

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

}
