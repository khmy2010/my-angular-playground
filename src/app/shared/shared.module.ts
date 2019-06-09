import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './component/loading/loading.component';
import { TraceToggleComponent } from './component/trace-toggle/trace-toggle.component';

const exportingComponents = [
  LoadingComponent,
  TraceToggleComponent
];

@NgModule({
  declarations: [
    ...exportingComponents
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    ...exportingComponents
  ]
})
export class SharedModule {

}