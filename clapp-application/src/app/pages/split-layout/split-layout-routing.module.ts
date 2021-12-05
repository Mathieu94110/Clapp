import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplitLayoutPage } from './split-layout.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'defibrillators',
    pathMatch: 'full',
  },
  {
    path: '',
    component: SplitLayoutPage,
    children: [
      {
        path: 'defibrillators',
        loadChildren: () =>
          import('../defibrillators/defibrillators.module').then(
            (m) => m.DefibrillatorsPageModule
          ),
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('../orders/orders.module').then((m) => m.OrdersPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplitLayoutPageRoutingModule {}
