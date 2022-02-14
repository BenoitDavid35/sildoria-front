import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayHandlingService {

  constructor() { }

  private componentToDisplay: string = '';

  getComponentToDisplay(){
    if(this.componentToDisplay == ''){
      return 'planet_view';
    }else{
        return this.componentToDisplay;
    }
  }
  setComponentToDisplay(componentToDisplay){
    this.componentToDisplay = componentToDisplay;
  }

}
