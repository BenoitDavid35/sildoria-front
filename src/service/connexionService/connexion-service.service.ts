import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

//for cookies, tutorial lies there https://itnext.io/angular-8-how-to-use-cookies-14ab3f2e93fc

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  private ClientSILA_ID: string;
  private ClientMail: string;
  private ClientID: string;
  private ClientAvatar: string;
  private ClientTimestamp: string;
  private Connected: string;
  private ClientPassword: string;
  private ClientRole: string;
  private ClientSystem: string;
  private IntraPosition: string;
  private Mass: string;
  private Temperature: string;

  constructor(private cookieService: CookieService) {
    this.Connected = 'false';
  }

  getClientSILA_ID(){
    this.ClientSILA_ID = this.cookieService.get('clientSILA_ID');
    return this.ClientSILA_ID;
  }
  setClientSILA_ID(clientSILA_ID){
    this.cookieService.set( 'clientSILA_ID',clientSILA_ID,1800,'Strict');
    this.ClientSILA_ID = clientSILA_ID;
  }

  getClientMail(){
    this.ClientMail = this.cookieService.get('clientMail');
    return this.ClientMail;
  }
  setClientMail(clientMail){
    this.cookieService.set( 'clientMail',clientMail,1800,'Strict');
    this.ClientMail = clientMail;
  }

  getClientID(){
    this.ClientID = this.cookieService.get('clientID');
    return this.ClientID;
  }
  setClientID(clientID){
    this.cookieService.set( 'clientID',clientID,1800,'Strict');
    this.ClientID = clientID;
  }

  getClientAvatar(){
    this.ClientAvatar = this.cookieService.get('clientAvatar');
    return this.ClientAvatar;
  }
  setClientAvatar(clientAvatar){
    clientAvatar = 'http://localhost:8888/images-api/' + clientAvatar;
    this.cookieService.set( 'clientAvatar',clientAvatar,1800,'Strict');
    this.ClientAvatar = clientAvatar;
  }

  getClientTimestamp(){
    this.ClientTimestamp = this.cookieService.get('timestamp');
    return this.ClientTimestamp;
  }
  setClientTimestamp(timestamp){
    this.cookieService.set( 'timestamp',timestamp,1800,'Strict');
    this.ClientTimestamp = timestamp;
  }

  timestamp(){
    return Math.floor(Date.now() / 1000);
  }

  getConnected(){
    this.Connected = this.cookieService.get('connected');
    return this.Connected;
  }
  setConnected(connected){
    this.cookieService.set( 'connected',connected,1800,'Strict');
    this.Connected = connected;
  }

  getClientPassword(){
    this.ClientPassword = this.cookieService.get('clientPassword');
    return this.ClientPassword;
  }
  setClientPassword(clientPassword){
    this.cookieService.set( 'clientPassword',clientPassword,1800,'Strict');
    this.ClientPassword = clientPassword;
  }

  getClientRole(){
    this.ClientRole = this.cookieService.get('clientRole');
    return this.ClientRole;
  }
  setClientRole(clientRole){
    this.cookieService.set( 'clientRole',clientRole,1800,'Strict');
    this.ClientRole = clientRole;
  }

  getSystem(){
    this.ClientSystem = this.cookieService.get('clientSystem');
    return this.ClientSystem;
  }
  setSystem(clientSystem){
    this.cookieService.set( 'clientSystem',clientSystem,1800,'Strict');
    this.ClientSystem = clientSystem;
  }

  getIntraPosition(){
    this.IntraPosition = this.cookieService.get('intraPosition');
    return this.IntraPosition;
  }
  setIntraPosition(intraPosition){
    this.cookieService.set( 'intraPosition',intraPosition,1800,'Strict');
    this.IntraPosition = intraPosition;
  }

  getMass(){
    this.Mass = this.cookieService.get('mass');
    return this.Mass;
  }
  setMass(mass){
    this.cookieService.set( 'mass',mass,1800,'Strict');
    this.Mass = mass;
  }

  getTemperature(){
    this.Temperature = this.cookieService.get('temperature');
    return this.Temperature;
  }
  setTemperature(temperature){
    this.cookieService.set( 'temperature',temperature,1800,'Strict');
    this.Temperature = temperature;
  }

  disconnect(){
    this.cookieService.delete('clientSILA_ID');
    this.cookieService.delete('clientMail');
    this.cookieService.delete('clientID');
    this.cookieService.delete('clientAvatar');
    this.cookieService.delete('timestamp');
    this.cookieService.delete('connected');
    this.Connected = 'false';
    this.cookieService.delete('clientPassword');
    this.cookieService.delete('clientRole');
    this.cookieService.delete('clientSystem');
  }

}
