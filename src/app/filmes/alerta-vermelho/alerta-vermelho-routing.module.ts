import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertaVermelhoPage } from './alerta-vermelho.page';

const routes: Routes = [
  {
    path: '',
    component: AlertaVermelhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertaVermelhoPageRoutingModule {}
