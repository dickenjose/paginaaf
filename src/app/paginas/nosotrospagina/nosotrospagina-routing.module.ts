import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NosotrospaginaPage } from './nosotrospagina.page';

const routes: Routes = [
  {
    path: '',
    component: NosotrospaginaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NosotrospaginaPageRoutingModule {}
