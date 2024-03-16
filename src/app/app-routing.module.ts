import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubsidiesComponent } from './components/subsidies/subsidies.component';

const routes: Routes = [
  // Другие маршруты...
  { path: 'subsidies', component: SubsidiesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
