import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../../service/connexionService/connexion-service.service';

@Component({
  selector: 'app-planet-view',
  templateUrl: './planet-view.component.html',
  styleUrls: ['./planet-view.component.css']
})
export class PlanetViewComponent implements OnInit {

  constructor(private Connexion: ConnexionService) { }

  userName: string;
  // url: string = 'getPlanetInformations/';
  system: string = '';
  intraPosition: string = '';
  mass: string = '';
  temperature: string = '';
  building: string = 'building';
  technology: string = 'technology';
  square: string = 'square';
  ship_building: string = 'ship_building';

  ngOnInit(): void  {
    this.userName = this.Connexion.getClientSILA_ID();
    this.system = this.Connexion.getSystem();
    this.intraPosition = this.Connexion.getIntraPosition();
    this.mass = this.Connexion.getMass();
    this.temperature = this.Connexion.getTemperature();
  }
}
