import { AccountService } from './services/accountService/account.service';
import { AlertifyService } from './services/alertifyService/alertify.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { ProductFilterPipe } from './components/product/product-filter.pipe';
import { ProductAddForms1Component } from './components/product/product-add-forms1/product-add-forms1.component';
import { ProductAddForms2Component } from './components/product/product-add-forms2/product-add-forms2.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './components/login/login.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductComponent,
    ProductFilterPipe,
    ProductAddForms1Component,
    ProductAddForms2Component,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,ReactiveFormsModule],
  providers: [AlertifyService,AccountService,LoginGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
