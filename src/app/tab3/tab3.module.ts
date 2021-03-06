import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';



import { Tab3Page } from './tab3.page';

import {NgxMasonryModule} from 'ngx-masonry';
const routes: Routes = [
  {
    path: '',
    component: Tab3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgxMasonryModule
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
