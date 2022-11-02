import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { ProductsComponent } from './products/products.component';
import { TrafficsComponent } from './traffics/traffics.component';

const routes: Routes = [
  { path: 'dashboard', component: DashComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'products', component: ProductsComponent },
  { path: 'traffics', component: TrafficsComponent },
  { path: 'members', component: DashComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
