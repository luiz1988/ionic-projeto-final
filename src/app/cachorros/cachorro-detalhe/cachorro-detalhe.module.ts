import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CachorroDetalhePage } from './cachorro-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: CachorroDetalhePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CachorroDetalhePage]
})
export class CachorroDetalhePageModule {}
