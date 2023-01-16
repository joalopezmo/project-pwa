import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentDetailComponent } from './component/component-detail/component-detail.component';
import { ComponentListComponent } from './component/component-list/component-list.component';

const routes: Routes = [
  { path: '', component: ComponentListComponent },
  { path: 'digimon/:name', component: ComponentDetailComponent },
  { path: '**', component: ComponentListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
