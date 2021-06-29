import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() item:any;
  safeSrc: SafeResourceUrl;
  constructor(private ModalController:ModalController , private ds:DomSanitizer,private ss:SocialSharing,private asc:ActionSheetController) { }

  ngOnInit() {
    console.log("mococa",this.item.data.titulo)
  }
  cerrar(){
    this.ModalController.dismiss();
  }
  doom(url){
    return this.safeSrc=this.ds.bypassSecurityTrustResourceUrl(url)
  }
  async lanzarAction() {
    const actionSheet = await this.asc.create({
      header: 'Acciones',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Compartir',
        icon: 'share',
        handler: () => {
          this.ss.share(
            this.item.data.titulo,
            this.item.data.contenidocorto,
            '',
            'afondocanaldigital.com.bo/noticias',
          )
        }
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }


}
