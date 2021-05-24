import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SourcePageRoutingModule } from './source-routing.module';

import { SourcePage } from './source.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SourcePageRoutingModule
  ],
  declarations: [SourcePage]
})
export class SourcePageModule {}
