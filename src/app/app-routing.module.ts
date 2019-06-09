import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteConstant } from 'src/constant/route.constant';

const routes: Routes = [
  {
    path: RouteConstant.AUTO_CD,
    loadChildren: () => import('./autocd/autocd.module').then(m => m.AutocdModule)
  },
  {
    path: RouteConstant.MANUAL_CD,
    loadChildren: () => import('./manualcd/manualcd.module').then(m => m.ManualCdModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
