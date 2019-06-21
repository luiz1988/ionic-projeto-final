import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CachorrosPage } from './cachorros.page';

const routes: Routes = [
  {
    path: '',
    component: CachorrosPage
  }
 
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CachorrosPage]
})
export class CachorrosPageModule {}
