import { IListGenre } from './../models/IGenero.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class GeneroService {
  language = 'pt-BR';
  private apiURL = 'https://api.themoviedb.org/3/';
  private key = '?api_key=b2b54e46067e0019cd6d33f4913f8700';

  constructor(
    private http: HttpClient,
    private toastController: ToastController) {}

  searchGenre(): Observable<IListGenre> {
    const url = `${this.apiURL}genre/movie/list${this.key}&language=${this.language}`;

    return this.http.get<IListGenre>(url).pipe(
      map(returnErro => returnErro),
      catchError(error => this.showError(error))
    );
  }

  async showError(error) {
    const toast = await this.toastController.create({
      message: 'Erro ao consultar a API!',
      duration: 2000,
      color: 'danger',
      position: 'middle'
    });
    toast.present();
    return null;
  }
}
