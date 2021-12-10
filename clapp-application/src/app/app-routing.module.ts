import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'defibrillators',
    pathMatch: 'full',
  },

  {
    path: 'defibrillators',
    loadChildren: () =>
      import('./pages/defibrillators/defibrillators.module').then(
        (m) => m.DefibrillatorsPageModule
      ),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./pages/orders/orders.module').then((m) => m.OrdersPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule, HttpClientModule],
})
export class AppRoutingModule {}
