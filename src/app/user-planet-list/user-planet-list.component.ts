import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../../service/connexionService/connexion-service.service';
import { ApiCallService } from '../../service/api-call/api-call.service';

@Component({
  selector: 'app-user-planet-list',
  templateUrl: './user-planet-list.component.html',
  styleUrls: ['./user-planet-list.component.css']
})
export class UserPlanetListComponent implements OnInit {

  constructor(private Connexion: ConnexionService, private apiService: ApiCallService) { }

  url: string = "loadUserPlanets/";
  error: string = '';
  userPlanets: any;

  ngOnInit(): void  {
    this.loadUserPlanets(this.Connexion.getClientID());
  }

  loadUserPlanets(userID: any){
    var valueArray = [
      userID
    ];

    this.apiService.callServer(this.url,valueArray)
    .subscribe(resp => {
      if(resp == 'ERROR_LOADING_PLANETS'){
        this.error = 'Erreur lors du chargement des planètes.'
      }else {
        this.userPlanets = resp;
      }
      });
  }

  changeTarget(system: any,position: any){
      this.Connexion.setSystem(system);
      this.Connexion.setIntraPosition(position);
  }

}
