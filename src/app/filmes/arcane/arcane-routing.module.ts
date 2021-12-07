import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArcanePage } from './arcane.page';

const routes: Routes = [
  {
    path: '',
    component: ArcanePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArcanePageRoutingModule {}
