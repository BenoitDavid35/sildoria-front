import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValueFormatterService {

  constructor() { }

  formatBackIdToTitleValue(item: any){
    switch(item) {
      case 'metal_mine':
        return 'Metal mine';
      break;
      case 'crystal_mine':
        return 'Crystal mine';
      break;
      case 'gas_mine':
        return 'Gas mine';
      break;
      case 'solar_mine':
        return 'Solar plant';
      break;
      case 'fusion_reactor':
        return 'Fusion reactor';
      break;
      case 'metal_warehouse':
        return 'Metal warehouse';
      break;
      case 'crystal_warehouse':
        return 'Crystal Warehouse';
      break;
      case 'gas_warehouse':
        return 'Gas warehouse';
      break;
      case 'waste_factory':
        return 'Waste Factory';
      break;
      case 'planet_engineering_complex':
        return 'Engineering complex';
      break;
      case 'robotic_center':
        return 'Robotic center';
      break;
      case 'spaceport':
        return 'Spaceport';
      break;
      case 'laboratory':
        return 'Laboratory';
      break;
      case 'experimental_research_center':
        return 'Experimentation center';
      break;
      case 'rare_ressource_research_center':
        return 'Rare ressource research center';
      break;
      case 'military_factory':
        return 'Military factory';
      break;
      case 'supercalculator':
        return 'Supercalculator';
      break;
      case 'alliance_center':
        return 'Alliance center';
      break;
      case 'design_center':
        return 'Design center';
      break;
      case 'missile_silo':
        return 'Missile silo';
      break;
      case 'metal':
        return 'Metal';
      break;
      case 'crystal':
        return 'Crystal';
      break;
      case 'gas':
        return 'Gas';
      break;
      case 'extraction':
        return 'Extraction';
      break;
      case 'energy':
        return 'Energy';
      break;
      case 'fusion':
        return 'Fusion';
      break;
      case 'chemical_engine':
        return 'Chemical engine';
      break;
      case 'ion_engine':
        return 'Ion engine';
      break;
      case 'microwarp_drive':
        return 'Microwarp Drive';
      break;
      case 'quantum_drive':
        return 'Quantum drive';
      break;
      case 'benalite_engine':
        return 'Benalite engine';
      break;
      case 'astrophysics':
        return 'Astrophysics';
      break;
      case 'intergalactic_research_network':
        return 'Intergalactic Research network';
      break;
      case 'ballistic':
        return 'Ballistic';
      break;
      case 'computer':
        return 'Computer';
      break;
      case 'design':
        return 'Design';
      break;
      case 'spy':
        return 'Spy';
      break;
      case 'weapon':
        return 'Weapon';
      break;
      case 'laser':
        return 'Laser';
      break;
      case 'photon':
        return 'Photon';
      break;
      case 'ion':
        return 'Ion';
      break;
      case 'plasma':
        return 'Plasma';
      break;
      case 'neutron':
        return 'Neutron';
      break;
      case 'electromagnetic':
        return 'Electromagnetic';
      break;
      case 'antimatter':
        return 'Antimatter';
      break;
      case 'armor':
        return 'Armor';
      break;
      case 'shield':
        return 'Shield';
      break;
      case 'laser_turret':
        return 'Lazer';
      break;
      case 'photon_turret':
        return 'Photon';
      break;
      case 'ion_turret':
        return 'Ion';
      break;
      case 'plasma_turret':
        return 'Plasma';
      break;
      case 'gauss_turret':
        return 'Gauss';
      break;
      case 'neutron_turret':
        return 'Neutron';
      break;
      case 'antimatter_turret':
        return 'Antimater';
      break;
      case 'small_shield':
        return 'Small shield';
      break;
      case 'big_shield':
        return 'Heavy shield';
      break;
      case 'ballistic_missile':
        return 'Ballistic Missile';
      break;
      case 'spatial_mine':
        return 'Spatial mine';
      break;
      case 'defensive_satellite':
        return 'Defensive Satellite';
      break;
      case 'heavy_defensive_satellite':
        return 'Heavy Defensive Satellite';
      break;
      case 'fighter':
        return 'Fighter';
      break;
      case 'improved_fighter':
        return 'Improved fighter';
      break;
      case 'light_cruiser':
        return 'Light Cruiser';
      break;
      case 'bomb_cruiser':
        return 'Bomb Cruiser';
      break;
      case 'line_cruiser':
        return 'Line Cruiser';
      break;
      case 'battleship':
        return 'Battleship';
      break;
      case 'line_battleship':
        return 'Line battleship';
      break;
      case 'fleet_destructor':
        return 'Fleet Destuctor';
      break;
      case 'titan_destructor':
        return 'Titan Destuctor';
      break;
      case 'titan_1':
        return 'Titan 1';
      break;
      case 'titan_2':
        return 'Titan 2';
      break;
      case 'titan_3':
        return 'Titan 3';
      break;
      case 'titan_4':
        return 'Ragnarok';
      break;
      case 'spy_probe':
        return 'Spy Probe';
      break;
      case 'small_transporter':
        return 'Small Transporter';
      break;
      case 'big_transporter':
        return 'Big Transporter';
      break;
      case 'planet_extractor':
        return 'Planet Extractor';
      break;
      case 'nebulae_extractor':
        return 'Nebulae Extractor';
      break;
      case 'black_hole_extractor':
        return 'Black Hole Extractor';
      break;
      case 'asteroid_field_extractor':
        return 'Asteroid Field Extractor';
      break;
      case 'colonization_ship':
        return 'Colonization Ship';
      break;
      case 'recycling_ship':
        return 'Recycling Ship';
      break;
      case 'solar_satellite':
        return 'Solar Satellite';
      break;
      case 'hunter_carrier':
        return 'Hunter Carrier';
      break;
      case 'shield_destructor':
        return 'Shield Destructor';
      break;
      case 'boarding_vessel':
        return 'Boarding Vessel';
      break;
      case 'interplanetary_missile':
        return 'Interplanetary Missile';
      break;
      default:
        return '';
      break;
    }
  };

  getDateFormattedFromTimestamp(timestamp: any){
    var year = this.getNumberOfFullYear(timestamp);
    var month = this.getNumberOfMonth(timestamp);
    var day = this.getNumberOfDay(timestamp);
    var hour = this.getNumberOfHours(timestamp);
    var minutes = this.getNumberOfMinutes(timestamp);
    var seconds = this.getNumberOfSeconds(timestamp);

    // console.log("year: " + year);
    // console.log("month: " + month);
    // console.log("day: " + day);
    // console.log("hour: " + hour);
    // console.log("minutes: " + minutes);
    // console.log("seconds: " + seconds);

    var outputValue = "";

    if(year != '0'){
      outputValue = year + "y ";
    }
    if(month != '0'){
      outputValue = outputValue + month + "m ";
    }
    if(day != '0'){
      outputValue = outputValue + day + "d ";
    }
    if(hour != '0'){
      outputValue = outputValue + hour + "h ";
    }
    if(minutes != '0'){
      outputValue = outputValue + minutes + "min ";
    }
    outputValue = outputValue + seconds + "s ";

    return outputValue;
  }

  getNumberOfFullYear(timestamp: any){
    return Math.floor(timestamp/31104000).toString();
  }

  getNumberOfMonth(timestamp: any){
    var indexInYear = timestamp/31104000;
    if(indexInYear != Math.floor(indexInYear)){
      var indexInMonth = indexInYear.toString();
      indexInMonth = indexInMonth.substr(indexInMonth.indexOf('.')+1,2);
      if(indexInMonth.length == 1){
        indexInMonth = indexInMonth + '0';
      }
      return Math.round((parseInt(indexInMonth)/100)*12);
    }else{
      return '0';
    }
  }

  getNumberOfDay(timestamp: any){
    var indexInMonth = timestamp/2592000;
    if(indexInMonth != Math.floor(indexInMonth)){
      var indexInDay = indexInMonth.toString();
      indexInDay = indexInDay.substr(indexInDay.indexOf('.')+1,2);
      if(indexInDay.length == 1){
        indexInDay = indexInDay + '0';
      }
      return Math.round((parseInt(indexInDay)/100)*30);
    }else{
      return '0';
    }
  }

  getNumberOfHours(timestamp: any){
    var indexInDay = timestamp/86400;
    if(indexInDay != Math.floor(indexInDay)){
      var indexInHour = indexInDay.toString();
      indexInHour = indexInHour.substr(indexInHour.indexOf('.')+1,2);
      if(indexInHour.length == 1){
        indexInHour = indexInHour + '0';
      }
      return Math.round((parseInt(indexInHour)/100)*24);
    }else{
      return '0';
    }
  }

  getNumberOfMinutes(timestamp: any){
    var indexInHour = timestamp/3600;
    if(indexInHour != Math.floor(indexInHour)){
      var indexInMinutes = indexInHour.toString();
      indexInMinutes = indexInMinutes.substr(indexInMinutes.indexOf('.')+1,2);
      if(indexInMinutes.length == 1){
        indexInMinutes = indexInMinutes + '0';
      }
      return Math.round((parseInt(indexInMinutes)/100)*60);
    }else{
      return '0';
    }
  }

  getNumberOfSeconds(timestamp: any){
    var indexInMinutes = timestamp/60;
    if(indexInMinutes != Math.floor(indexInMinutes)){
      var indexInSeconds = indexInMinutes.toString();
      indexInSeconds = indexInSeconds.substr(indexInSeconds.indexOf('.')+1,2);
      if(indexInSeconds.length == 1){
        indexInSeconds = indexInSeconds + '0';
      }
      return Math.round((parseInt(indexInSeconds)/100)*60);
    }else{
      return '0';
    }
  }

}
