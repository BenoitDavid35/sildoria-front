import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { CookieService } from 'ngx-cookie-service';

//services
import { EncrDecrService } from '../service/encrdecrService/encr-decr.service';
import { UploadService } from '../service/upload/upload.service';
import { FilterService } from '../service/filterService/filter.service';
import { ConnexionService } from '../service/connexionService/connexion-service.service';

//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapListComponent } from './map-list/map-list.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { MailConfirmComponent } from './mail-confirm/mail-confirm.component';
import { FourOhFourComponent } from './fourohfour/fourohfour.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AccountWidgetComponent } from './account-widget/account-widget.component';
import { PlanetViewComponent } from './planet-view/planet-view.component';
import { UserPlanetListComponent } from './user-planet-list/user-planet-list.component';
import { AccountComponent } from './account/account.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { NavbarSettingsComponent } from './navbar-settings/navbar-settings.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ObjectInConstructionComponent } from './object-in-construction/object-in-construction.component';
import { ControlCenterComponent } from './control-center/control-center.component';
import { ShipyardComponent } from './shipyard/shipyard.component';
import { FleetComponent } from './fleet/fleet.component';
import { CreateNewFleetComponent } from './create-new-fleet/create-new-fleet.component';
import { FleetActionComponent } from './fleet-action/fleet-action.component';
import { NotConnectedUserWelcomeComponent } from './not-connected-user-welcome/not-connected-user-welcome.component';

@NgModule({
  declarations: [
    CreateAccountComponent,
    AppComponent,
    MapListComponent,
    MailConfirmComponent,
    FourOhFourComponent,
    ConnexionComponent,
    AccountWidgetComponent,
    PlanetViewComponent,
    UserPlanetListComponent,
    AccountComponent,
    SidebarComponent,
    BuildingsComponent,
    NavbarSettingsComponent,
    TechnologiesComponent,
    ObjectInConstructionComponent,
    ControlCenterComponent,
    ShipyardComponent,
    FleetComponent,
    CreateNewFleetComponent,
    FleetActionComponent,
    NotConnectedUserWelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxSliderModule
  ],
  providers: [
    EncrDecrService,
    UploadService,
    CookieService,
    FilterService,
    ConnexionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
