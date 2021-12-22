import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full',
  },

  {
    path: 'recipes',
    loadChildren: () =>
      import('./pages/defibrillators/defibrillators.module').then(
        (m) => m.DefibrillatorsPageModule
      ),
  },
  {
    path: 'my-recipes',
    loadChildren: () =>
      import('./pages/orders/orders.module').then((m) => m.OrdersPageModule),
  },  {
    path: 'recipe-details',
    loadChildren: () => import('./pages/recipe-details/recipe-details.module').then( m => m.RecipeDetailsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule, HttpClientModule],
})
export class AppRoutingModule {}
