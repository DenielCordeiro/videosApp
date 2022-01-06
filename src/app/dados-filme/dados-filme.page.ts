import { Component, OnInit } from '@angular/core';
import { IFilmeApi } from './../models/IFilmeAPI.model';
import { DadosService } from './../services/dados.service';

@Component({
  selector: 'app-dados-filme',
  templateUrl: './dados-filme.page.html',
  styleUrls: ['./dados-filme.page.scss'],
})
export class DadosFilmePage implements OnInit {

  filme: IFilmeApi;
  genres: string[] = [];

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.filme = this.dadosService.pegardados('filme');
    this.genres = this.dadosService.pegardados('generos');
    console.log('Filme Enviado', this.filme);
  }

}
