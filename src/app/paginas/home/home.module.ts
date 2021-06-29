
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ComponentesModule } from '../../componentes/componentes.module';
import { TuberiasModule } from '../../tuberias/tuberias.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ComponentesModule,
    TuberiasModule

  ],
  declarations: [HomePage]
})
export class HomePageModule {}
