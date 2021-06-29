import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiaspaginaPageRoutingModule } from './noticiaspagina-routing.module';

import { NoticiaspaginaPage } from './noticiaspagina.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiaspaginaPageRoutingModule,
    ComponentesModule
  ],
  declarations: [NoticiaspaginaPage]
})
export class NoticiaspaginaPageModule {}
