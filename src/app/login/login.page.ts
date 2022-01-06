import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;


  constructor(
    public toastController: ToastController,
    private route: Router
    ) { }

  ngOnInit() {
  }

  login() {
    if (this.email === 'test@test.com' && this.password === 'test') {
      this.route.navigateByUrl('/tabs/tab1');
      this.presentToast('Seja Bem-vindo!', 'success');
    } else {
      this.presentToast('Erro! usuário e/ou senha inválidos!', 'danger');
    }
  }

  async presentToast(text: string, colors: string) {
    const toast = await this.toastController.create({
      message: text,
      color: colors,
      duration: 2000
    });
    toast.present();
  }

}
