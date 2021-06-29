import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NosotrospaginaPageRoutingModule } from './nosotrospagina-routing.module';

import { NosotrospaginaPage } from './nosotrospagina.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NosotrospaginaPageRoutingModule,
    ComponentesModule
  ],
  declarations: [NosotrospaginaPage]
})
export class NosotrospaginaPageModule {}
