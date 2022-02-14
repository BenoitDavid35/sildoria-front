import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../service/AuthGuard/auth-guard.service';
import { RoleGuardServiceService } from '../service/RoleGuardService/role-guard-service.service';
import { CreateAccountComponent } from './create-account/create-account.component';
import { MapListComponent } from './map-list/map-list.component';
import { MailConfirmComponent } from './mail-confirm/mail-confirm.component';
import { FourOhFourComponent } from './fourohfour/fourohfour.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PlanetViewComponent } from './planet-view/planet-view.component';
import { AccountComponent } from './account/account.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path: '', component: SidebarComponent},
  {path: 'planet-view', component: PlanetViewComponent},
  {path: 'create-account', component: CreateAccountComponent},
  {path: 'server_map', component: MapListComponent},
  {path: 'mail_confirmation', component: MailConfirmComponent},
  {path: 'mail_confirmation/:confirm_token', component: MailConfirmComponent},
  {path: 'account-settings', component: AccountComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
