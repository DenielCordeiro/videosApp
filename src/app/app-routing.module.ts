import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'alerta-vermelho',
    loadChildren: () => import('./filmes/alerta-vermelho/alerta-vermelho.module').then( m => m.AlertaVermelhoPageModule)
  },
  {
    path: 'arcane',
    loadChildren: () => import('./filmes/arcane/arcane.module').then( m => m.ArcanePageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
