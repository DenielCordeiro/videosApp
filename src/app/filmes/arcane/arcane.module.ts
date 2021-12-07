import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArcanePageRoutingModule } from './arcane-routing.module';

import { ArcanePage } from './arcane.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArcanePageRoutingModule
  ],
  declarations: [ArcanePage]
})
export class ArcanePageModule {}
