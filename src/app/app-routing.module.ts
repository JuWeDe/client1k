import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubsidiesComponent } from './components/subsidies/subsidies.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { InfoComponent } from './components/info/info.component';
import { RoutesComponent } from './components/routes/routes.component';
import { FlightsComponent } from './components/flights/flights.component';
import { ReferenceComponent } from './components/reference/reference.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: 'subsidies', component: SubsidiesComponent },
  { path: 'info', component: InfoComponent },
  { path: 'routes', component: RoutesComponent },
  { path: 'flights', component: FlightsComponent },
  { path: 'references', component: ReferenceComponent },
  { path: 'profile', component: ProfileComponent },
  // { path: '', redirectTo: '/', pathMatch: 'full' }, // маршрут по умолчанию
  // { path: '**', component: PageNotFoundComponent }, // Not Found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



