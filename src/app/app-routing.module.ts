import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
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
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'filmes',
    loadChildren: './filmes/filmes.module#FilmesPageModule'
  },
  {
    path: 'filmes-detalhe/:id',
    loadChildren:
      './filmes/filmes-detalhe/filmes-detalhe.module#FilmesDetalhePageModule'
  },
  {
     path: 'cachorros',
     loadChildren: './cachorros/cachorros.module#CachorrosPageModule' 
  },
  { 
    path: 'cachorro-detalhe/:id', 
    loadChildren: './cachorros/cachorro-detalhe/cachorro-detalhe.module#CachorroDetalhePageModule' 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

