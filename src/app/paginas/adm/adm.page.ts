import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../servicios/firestore.service';


import { Tarea } from '../../modelos/modelos';
import { ModalController } from '@ionic/angular';
import { AgregarPage } from '../agregar/agregar.page';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.page.html',
  styleUrls: ['./adm.page.scss'],
})
export class AdmPage implements OnInit {
  tareaEditando:Tarea;
  arrayColeccion:any=[
    {
      id:"",
      data:{} as Tarea
    }
  ]
  idTareaSeleccionada:string;
  customPickerOptions: any;
  constructor(private firestoreService:FirestoreService, private modalController:ModalController) {
    this.tareaEditando= {} as Tarea;
    this.obtenerLista();
    this.customPickerOptions = {
      buttons: [{
        text: 'Ok',
        handler: (event) => {
          console.log(event);
          this.tareaEditando.horaInicio=`${event.hour.text}:${event.minute.text}`;
        }
        },
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Clicked Log. Do not Dismiss.');
          }
          }
    ]
    }


  }
  ngOnInit(){

  }
  insertarTarea(){
    console.log(this.tareaEditando)
    this.tareaEditando.constenidocorto=this.tareaEditando.contenido.substr(0,90);
    this.firestoreService.insertar("tareas",this.tareaEditando).then(()=>{
      console.log("La tarea se creo satisfactoriamente");
      this.tareaEditando={} as Tarea;
    },(error)=>{
      console.log(error);
    })
  }
  obtenerLista(){
    console.log("la funcion se ejecuta");
    this.firestoreService.consultar("tareas").subscribe((resultadoConsulta)=>{
      this.arrayColeccion=[];
      resultadoConsulta.forEach((datosTarea:any)=>{
        console.log(datosTarea);
        this.arrayColeccion.push({
          id:datosTarea.payload.doc.id,
          data:datosTarea.payload.doc.data()

        })
      })
    })
  }
  seleccionarTarea(tarea){
    console.log("tarea seleccionada" +tarea.id);
    this.idTareaSeleccionada=tarea.id;
    this.tareaEditando.titulo=tarea.data.titulo;
    this.tareaEditando.contenido=tarea.data.contenido;
    this.tareaEditando.enlace=tarea.data.enlace;
  }
  borrar(){
    this.firestoreService.borrar("tareas",this.idTareaSeleccionada).then(()=>{
      this.obtenerLista();
      this.tareaEditando={} as Tarea;
    })
  }
  eliminar(evento){
    this.firestoreService.borrar("tareas",evento).then(()=>{
      this.obtenerLista();
      this.tareaEditando={} as Tarea;
    })
  }
  modificar(){
    this.tareaEditando.constenidocorto=this.tareaEditando.contenido.substr(0,90);
    this.firestoreService.actualizar("tareas",this.idTareaSeleccionada,this.tareaEditando).then(()=>{
      this.obtenerLista();
      this.tareaEditando={} as Tarea;
    })
  }
  async presentModal(dato:string,id:string) {
    if (dato==="Añadir Tarea"){
      this.tareaEditando={} as Tarea;
    }
    const modal = await this.modalController.create({
      component: AgregarPage,
      cssClass: 'my-custom-class',
      componentProps: {
        nombre:dato,
        tareaEditando:this.tareaEditando,
        id:id,
      }
    });

    await modal.present();

    //const {data}= await modal.onWillDismiss();
    const resp =await modal.onWillDismiss();
    //console.log(resp.data)
    //console.log(data);

  }


}
function cambiar(){

}
