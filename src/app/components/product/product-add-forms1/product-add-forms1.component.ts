import { AlertifyService } from './../../../services/alertifyService/alertify.service';
import { CategoryService } from './../../../services/categoryService/category.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Category } from '../../category/category';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/productService/product.service';

@Component({
  selector: 'app-product-add-forms1',
  templateUrl: './product-add-forms1.component.html',
  styleUrls: ['./product-add-forms1.component.css'],
  providers: [CategoryService,ProductService],
})
export class ProductAddForms1Component implements OnInit {
  constructor(
    private categoryServive: CategoryService,
    private productService: ProductService,
    private alertifyService: AlertifyService
  ) {}
  model: Product = new Product();
  categories: Category[];

  ngOnInit(): void {
    this.categoryServive.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
  add(form: NgForm) {
    this.productService.addProduct(this.model).subscribe(data=>{
      this.alertifyService.success(data.name + " başarıyla eklendi.")
    });
  }
}
