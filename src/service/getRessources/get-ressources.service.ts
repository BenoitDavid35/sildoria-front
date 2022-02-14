import { Injectable } from '@angular/core';
import { ApiCallService } from '../api-call/api-call.service';
import { ConnexionService } from '../connexionService/connexion-service.service';

@Injectable({
  providedIn: 'root'
})
export class GetRessourcesService {

  constructor(private apiService: ApiCallService, private connexion: ConnexionService) { }

  url_ressources: string = 'ressources/';
  ressources: any = {
    "benalite": 0,
    "crystal": 0,
    "energy": 0,
    "gas": 0,
    "metal": 0
  };

  getRessources(){
    var valueArray = [
      this.connexion.getClientID(),
      this.connexion.getSystem(),
      this.connexion.getIntraPosition()
    ];
    this.apiService.callServer(this.url_ressources,valueArray)
    .subscribe(resp => {
      // console.log(resp);
      this.ressources = resp;
    });
  }
}
