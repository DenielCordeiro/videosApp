import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public alertController: AlertController,
    public toastController: ToastController) {}

  async favoriteAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Deseja favoritar <strong>skater</strong> ?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'Sim, favoritar!',
          handler: () => {
            this.toast();
          }
        }
      ]
    });

    await alert.present();
  }

  async toast() {
    const toast = await this.toastController.create({
      message: 'Skater adicionado aos favoritos.',
      duration: 2000,
      color: 'sucess'
    });
    toast.present();
  }

}
