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
      import('./pages/recipe/recipe.module').then((m) => m.RecipePageModule),
  },
  {
    path: 'my-recipes',
    loadChildren: () =>
      import('./pages/my-recipes/my-recipes.module').then(
        (m) => m.MyRecipesPageModule
      ),
  },
  {
    path: 'recipe-details',
    loadChildren: () =>
      import('./pages/recipe-details/recipe-details.module').then(
        (m) => m.RecipeDetailsPageModule
      ),
  },
  {
    path: 'recipe-details/:id',
    loadChildren: () =>
      import('./pages/recipe-details/recipe-details.module').then(
        (m) => m.RecipeDetailsPageModule
      ),
  },
  {
    path: 'wines',
    loadChildren: () => import('./pages/wines/wines.module').then( m => m.WinesPageModule)
  },
  {
    path: 'carrousel',
    loadChildren: () => import('./pages/carrousel/carrousel.module').then( m => m.CarrouselPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule, HttpClientModule],
})
export class AppRoutingModule {}
