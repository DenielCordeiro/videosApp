import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IListFilms } from './../models/IFilmeAPI.model';
import { ToastController } from '@ionic/angular';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  language = 'pt-BR';
  region = 'BR';

  private apiURL = 'https://api.themoviedb.org/3/';
  private key = '?api_key=b2b54e46067e0019cd6d33f4913f8700';

  constructor(
    private http: HttpClient,
    private toastController: ToastController) {}

  searchFilms(search: string): Observable<IListFilms> {
    const url = `${this.apiURL}search/movie${this.key}&language=${this.language}&region=${this.region}&query=${search}`;

    return this.http.get<IListFilms>(url).pipe(
      map(returnErro => returnErro),
      catchError(error => this.showError(error))
    );
  }

  async showError(error) {
    const toast = await this.toastController.create({
      message: 'Erro ao consultar API!',
      duration: 2000,
      color: 'danger',
      position: 'middle',
    });
    toast.present();
    return null;
  }
}
