import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiaspaginaPage } from './noticiaspagina.page';

const routes: Routes = [
  {
    path: '',
    component: NoticiaspaginaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiaspaginaPageRoutingModule {}
