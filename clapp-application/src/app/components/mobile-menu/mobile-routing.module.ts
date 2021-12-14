import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileMenuComponent } from './mobile-menu.component';

const routes: Routes = [
  {
    path: '',
    component: MobileMenuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobileMenuRoutingModule {}
