import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment.prod';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NoticiasComponent } from './noticias/noticias.component';
import { BannerComponent } from './banner/banner.component';
import { PublicidadBannerComponent } from './publicidad-banner/publicidad-banner.component';
import { TuberiasModule } from '../tuberias/tuberias.module';
import { PublicidadImagenComponent } from './publicidad-imagen/publicidad-imagen.component';
import { PublicidadVideoComponent } from './publicidad-video/publicidad-video.component';
import { NoticiaImagenComponent } from './noticia-imagen/noticia-imagen.component';
import { AfondoComponent } from './afondo/afondo.component';



@NgModule({
  declarations: [
    EncabezadoComponent,
    FooterComponent,
    NoticiasComponent,
    BannerComponent,
    PublicidadBannerComponent,
    PublicidadImagenComponent,
    PublicidadVideoComponent,
    NoticiaImagenComponent,
    AfondoComponent
  ],
  exports:[
    EncabezadoComponent,
    FooterComponent,
    NoticiasComponent,
    BannerComponent,
    PublicidadBannerComponent,
    PublicidadImagenComponent,
    PublicidadVideoComponent,
    NoticiaImagenComponent,
    AfondoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    TuberiasModule
  ]
})
export class ComponentesModule { }
