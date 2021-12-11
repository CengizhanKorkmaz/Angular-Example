import { LoginComponent } from './components/login/login.component';
import { ProductAddForms2Component } from './components/product/product-add-forms2/product-add-forms2.component';
import { ProductAddForms1Component } from './components/product/product-add-forms1/product-add-forms1.component';
import { ProductComponent } from './components/product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './components/login/login.guard';

const routes: Routes = [
  {
    path: 'products',
    component: ProductComponent,
  },
  {
    path: 'products-add-1',
    component: ProductAddForms1Component,
    canActivate: [LoginGuard],
  },
  {
    path: 'products-add-2',
    component: ProductAddForms2Component,
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'products/category/:categoryId',
    component: ProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
