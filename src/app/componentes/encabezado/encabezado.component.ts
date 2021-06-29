import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss'],
})
export class EncabezadoComponent implements OnInit {

  constructor(private menuController:MenuController) { }

  ngOnInit() {

  }
  onClick(){
    this.menuController.open();

  }
}
