import { Component, OnInit , ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { DisplayHandlingService } from '../../service/displayHandling/display-handling.service';
import { GetRessourcesService } from '../../service/getRessources/get-ressources.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private ComponentHandled: DisplayHandlingService, public ressourcesService: GetRessourcesService) {
  }

  subscription: Subscription;
  planet_view: string = '';
  galaxy_view: string = '';
  production_view: string = '';
  industry_view: string = '';
  account_component: string = '';
  economics_view: string = '';
  weapon_view: string = '';
  propulsion_view: string = '';
  player_view: string = '';
  route_system: string = '';
  route_intra: string = '';
  fighters: string = '';
  turrets: string = '';
  civilians: string = '';
  logistic: string = '';
  shipyard: string = '';
  fleet_view: string = '';

  ngOnInit(): void  {
    //Toggle Click Function
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
    this.loadComponent();
    this.ressourcesService.getRessources()
    // const source = interval(1000);
    // this.subscription = source.subscribe(val => this.ressourcesService.getRessources());
  }

  changeInnerComponent(content){
    this.eraseOldComponent();

    if(content == 'planet_view'){
      this.planet_view = 'TRUE';
      this.ComponentHandled.setComponentToDisplay('planet_view');
    }
    if(content == 'galaxy_view'){
      this.galaxy_view = 'TRUE';
      this.ComponentHandled.setComponentToDisplay('galaxy_view');
    }
    if(content == 'production_view'){
      this.production_view = 'TRUE';
      this.ComponentHandled.setComponentToDisplay('production_view');
    }
    if(content == 'industry_view'){
      this.industry_view = 'TRUE';
      this.ComponentHandled.setComponentToDisplay('industry_view');
    }
    if(content == 'economics_view'){
      this.economics_view = 'TRUE';
      this.ComponentHandled.setComponentToDisplay('economics_view');
    }
    if(content == 'weapon_view'){
      this.weapon_view = 'TRUE';
      this.ComponentHandled.setComponentToDisplay('weapon_view');
    }
    if(content == 'propulsion_view'){
      this.propulsion_view = 'TRUE';
      this.ComponentHandled.setComponentToDisplay('propulsion_view');
    }
    if(content == 'player_view'){
      this.player_view = 'TRUE';
      this.ComponentHandled.setComponentToDisplay('player_view');
    }
    if(content == 'fighters'){
      this.fighters = 'TRUE';
      this.ComponentHandled.setComponentToDisplay('fighters');
    }
    if(content == 'turrets'){
      this.turrets = 'TRUE';
      this.ComponentHandled.setComponentToDisplay('turrets');
    }
    if(content == 'civilians'){
      this.civilians = 'TRUE';
      this.ComponentHandled.setComponentToDisplay('civilians');
    }
    if(content == 'logistic'){
      this.logistic = 'TRUE';
      this.ComponentHandled.setComponentToDisplay('logistic');
    }
    if(content == 'shipyard'){
      this.shipyard = 'TRUE';
      this.ComponentHandled.setComponentToDisplay('shipyard');
    }
    if(content == 'fleet_view'){
      this.fleet_view = 'TRUE';
      this.ComponentHandled.setComponentToDisplay('fleet_view');
    }
  }

  loadComponent(){
    this.eraseOldComponent();
    this.changeInnerComponent(this.ComponentHandled.getComponentToDisplay());
  }

  eraseOldComponent(){
    this.planet_view = '';
    this.galaxy_view = '';
    this.production_view = '';
    this.industry_view = '';
    this.account_component = '';
    this.economics_view = '';
    this.weapon_view = '';
    this.propulsion_view = '';
    this.player_view = '';
    this.fighters = '';
    this.turrets = '';
    this.civilians = '';
    this.logistic = '';
    this.shipyard = '';
    this.fleet_view = '';
  }

}
