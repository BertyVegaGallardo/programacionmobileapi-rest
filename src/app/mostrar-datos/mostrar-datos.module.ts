import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MostrarDatosPage } from './mostrar-datos.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarDatosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MostrarDatosPage]
})
export class MostrarDatosPageModule {}
