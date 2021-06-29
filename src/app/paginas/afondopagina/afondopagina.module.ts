import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfondopaginaPageRoutingModule } from './afondopagina-routing.module';

import { AfondopaginaPage } from './afondopagina.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfondopaginaPageRoutingModule,
    ComponentesModule
  ],
  declarations: [AfondopaginaPage]
})
export class AfondopaginaPageModule {}
