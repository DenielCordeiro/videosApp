import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertaVermelhoPageRoutingModule } from './alerta-vermelho-routing.module';

import { AlertaVermelhoPage } from './alerta-vermelho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertaVermelhoPageRoutingModule
  ],
  declarations: [AlertaVermelhoPage]
})
export class AlertaVermelhoPageModule {}
