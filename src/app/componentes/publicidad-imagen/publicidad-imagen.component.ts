import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Tarea } from '../../modelos/modelos';
import { FirestoreService } from '../../servicios/firestore.service';

@Component({
  selector: 'app-publicidad-imagen',
  templateUrl: './publicidad-imagen.component.html',
  styleUrls: ['./publicidad-imagen.component.scss'],
})
export class PublicidadImagenComponent implements OnInit {
  arrayColeccion:any=[
    {
      id:"",
      data:{} as Tarea
    }
  ]
  datas:{};
  safeSrc: SafeResourceUrl;
  constructor(private ds:DomSanitizer, private firestoreService:FirestoreService) { }

  ngOnInit() {
    this.obtenerLista();


  }
  obtenerLista(){
    console.log("la funcion se ejecuta");
    this.firestoreService.consultar("tareas").subscribe((resultadoConsulta)=>{
      this.arrayColeccion=[];
      resultadoConsulta.forEach((datosTarea:any)=>{

        if (datosTarea.payload.doc.data().tipo==="imagen"){

          this.datas=datosTarea.payload.doc.data()

          this.arrayColeccion.push({
            id:datosTarea.payload.doc.id,
            data:this.datas

          })

        }

      })
    })


  }
  doom(url){

    return this.safeSrc=this.ds.bypassSecurityTrustResourceUrl(url)
  }

}
