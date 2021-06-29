import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
publicidadImagen:any[]=[
  {
    href:"./assets/img/publiart.gif",
    nombre:"Publiart",
    descripcion:"Grafica Digital"

  },
  {
    href:"./assets/img/upds.gif",
    nombre:"UPDS",
    descripcion:"Educación"
  },

  {
    href:"https://i.ibb.co/wWyHvWG/cocacola.gif",
    nombre:"UPDS",
    descripcion:"Educación"
  }
]
publicidadVideo:any[]=[
  {
    href:"./assets/img/corte.mp4",
    nombre:"OEP",
    descripcion:"Organo Electoral"
  }

]
publicidadGif:any[]=[
  {
    href:"./assets/img/publiart.gif"
  },
  {
    href:"./assets/img/upds.gif"
  },
  {
    href:"./assets/img/publiart.gif"
  },
  {
    href:"./assets/img/publiart.gif"
  },
]

  constructor() {}

}
