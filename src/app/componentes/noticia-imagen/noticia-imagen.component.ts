import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FirestoreService } from '../../servicios/firestore.service';
import { Tarea } from '../../modelos/modelos';
import { ModalPage } from '../../paginas/modal/modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-noticia-imagen',
  templateUrl: './noticia-imagen.component.html',
  styleUrls: ['./noticia-imagen.component.scss'],
})
export class NoticiaImagenComponent implements OnInit {
  arrayColeccion:any=[
    {
      id:"",
      data:{} as Tarea
    }
  ]
  datas:{};

  constructor(private firestoreService:FirestoreService,private mc:ModalController) { }

  ngOnInit() {
    this.obtenerLista();


  }
  obtenerLista(){
    this.firestoreService.consultar("tareas").subscribe((resultadoConsulta)=>{
    this.arrayColeccion=[];
    resultadoConsulta.forEach((datosTarea:any)=>{

        if (datosTarea.payload.doc.data().tipo==="nImagen"){

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

}
