import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefibrillatorsPage } from './defibrillators.page';

const routes: Routes = [
  {
    path: '',
    component: DefibrillatorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefibrillatorsPageRoutingModule {}
