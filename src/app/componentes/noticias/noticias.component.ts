import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../servicios/firestore.service';
import { Tarea } from '../../modelos/modelos';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { ModalPage } from '../../paginas/modal/modal.page';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {
  arrayColeccion:any=[
    {
      id:"",
      data:{} as Tarea
    }
  ]
  datas:{};
  safeSrc: SafeResourceUrl;
  constructor(private ds:DomSanitizer,
              private firestoreService:FirestoreService,
              private mc:ModalController,
              private ss:SocialSharing,
              private asc:ActionSheetController

              ) { }

  ngOnInit() {
    this.obtenerLista();


  }
  obtenerLista(){
    this.firestoreService.consultar("tareas").subscribe((resultadoConsulta)=>{
      this.arrayColeccion=[];
      resultadoConsulta.forEach((datosTarea:any)=>{

        if(datosTarea.payload.doc.data().tipo==="video"){
          this.datas=datosTarea.payload.doc.data()
          this.arrayColeccion.push({
            id:datosTarea.payload.doc.id,
            data:this.datas
          })
        }
      })
    })
  }
  async modal(item) {
    console.log(item)
    const modal = await this.mc.create({
      component:  ModalPage ,
      cssClass: 'my-custom-class',
      componentProps: {
        item:item,

      }
    });

    await modal.present();

    //const {data}= await modal.onWillDismiss();
    const resp =await modal.onWillDismiss();
    console.log(resp)
    //console.log(data);

  }
  doom(url){
    return this.safeSrc=this.ds.bypassSecurityTrustResourceUrl(url)
  }

}
