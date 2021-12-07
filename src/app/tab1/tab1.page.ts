import { Component } from '@angular/core';
import { IFilmes } from './../models/IFilmes.models';
import { AlertController, ToastController } from '@ionic/angular';
import { DadosService } from './../services/dados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Vídeos App';
  listaVideos: IFilmes[] = [
    {
      nome: 'Arcane',
      lancamento: '20/09/2021',
      duracao: '42m',
      classificacao: 92,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg',
      generos: ['Animação', 'Sci-Fi', 'Fantasy', 'Action', 'Adventure', 'Drama'],
      pagina: '/arcane'
    },
    {
      nome: 'Alerta Vermelho ',
      lancamento: '05/11/2021',
      duracao: '1h 48m',
      classificacao: 68,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pe17f8VDfzbvbHSAKAlcORtBHmW.jpg',
      generos: ['Ação', 'Comédia', 'Crime', 'Thriller' ],
      pagina: '/alerta-vermelho'
    }
  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router
  ) {}

  exibirFilme(filme: IFilmes) {
    this.dadosService.guardarDados('filme', filme);
    this.route.navigateByUrl('/dados-filme');
  }

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
      color: 'success'
    });
    toast.present();
  }

}
