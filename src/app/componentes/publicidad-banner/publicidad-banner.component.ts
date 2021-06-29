import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Tarea } from '../../modelos/modelos';
import { FirestoreService } from '../../servicios/firestore.service';

@Component({
  selector: 'app-publicidad-banner',
  templateUrl: './publicidad-banner.component.html',
  styleUrls: ['./publicidad-banner.component.scss'],
})
export class PublicidadBannerComponent implements OnInit {
  arrayColeccion:any=[
    {
      id:"",
      data:{} as Tarea
    }
  ]
  datas:{};
  safeSrc: SafeResourceUrl;
  constructor( private firestoreService:FirestoreService) { }
  ngOnInit() {
    this.obtenerLista();
  }
  obtenerLista(){
    this.firestoreService.consultar("tareas").subscribe((resultadoConsulta)=>{
      this.arrayColeccion=[];
      resultadoConsulta.forEach((datosTarea:any)=>{
        if (datosTarea.payload.doc.data().tipo==="banner"){
          this.datas=datosTarea.payload.doc.data()
          this.arrayColeccion.push({
            id:datosTarea.payload.doc.id,
            data:this.datas
          })
        }
      })
    })
  }
}
