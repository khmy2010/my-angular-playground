import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display/display.component';
import { ContainerPageComponent } from './container-page/container-page.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { AutoCdRoutingModule } from './autocd-routing.module';
import { CardComponent } from './card/card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DisplayComponent, ContainerPageComponent, ButtonsComponent, CardComponent],
  imports: [
    CommonModule,
    SharedModule,
    AutoCdRoutingModule
  ]
})
export class AutocdModule { }
