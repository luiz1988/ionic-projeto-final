import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'receita', pathMatch: 'full' },
  {
    path: 'receita',
    children: [
      {
        path: '',
        loadChildren: './receita/receitas.module#ReceitasPageModule',
      },
      {
        path: ':receitaId',
        loadChildren: './receita/receita-detalhes/receita-detalhe.module#ReceitaDetalhePageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


