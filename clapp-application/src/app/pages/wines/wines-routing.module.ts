import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WinesPage } from './wines.page';

const routes: Routes = [
  {
    path: '',
    component: WinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WinesPageRoutingModule {}
