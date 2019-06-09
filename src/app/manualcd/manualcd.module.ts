import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManualCdRoutingModule } from './manualcd-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { DisplayComponent } from './display/display.component';
import { ContainerPageComponent } from './container-page/container-page.component';
import { CardComponent } from './card/card.component';
import { SharedModule } from '../shared/shared.module';
import { TriggerBtnComponent } from './trigger-btn/trigger-btn.component';

@NgModule({
  declarations: [
    ButtonsComponent,
    ContainerPageComponent,
    DisplayComponent,
    CardComponent,
    TriggerBtnComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ManualCdRoutingModule
  ]
})
export class ManualCdModule { }
