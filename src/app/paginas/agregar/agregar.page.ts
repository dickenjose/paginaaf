import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirestoreService } from '../../servicios/firestore.service';
import { Tarea } from '../../modelos/modelos';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  @Input() nombre:string;
  @Input() tareaEditando:Tarea;
  @Input() id:string;
  customPickerOptions: any;
  constructor(private modalController:ModalController,private firestoreService:FirestoreService) {
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

  ngOnInit() {
    console.log(this.id)
  }

  cerrar(){
    this.modalController.dismiss();
  }
  cerrarConArgumentos(){
    this.firestoreService.insertar("tareas",this.tareaEditando).then(()=>{
      console.log("La tarea se creo satisfactoriamente");
      this.tareaEditando={} as Tarea;
      this.modalController.dismiss();
    },(error)=>{
      console.log(error);
    })
  }
  modificar(){
    this.tareaEditando.constenidocorto=this.tareaEditando.contenido.substr(0,90);

    this.firestoreService.actualizar("tareas",this.id,this.tareaEditando).then(()=>{

      this.tareaEditando={} as Tarea;
      this.modalController.dismiss();
    })
  }

}
