import { AlertifyService } from './../../../services/alertifyService/alertify.service';
import { ProductService } from 'src/app/services/productService/product.service';
import { CategoryService } from './../../../services/categoryService/category.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../category/category';

@Component({
  selector: 'app-product-add-forms2',
  templateUrl: './product-add-forms2.component.html',
  styleUrls: ['./product-add-forms2.component.css'],
  providers: [CategoryService, ProductService],
})
export class ProductAddForms2Component implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private productService: ProductService,
    private alertifyService: AlertifyService
  ) {}
  productAddForm: FormGroup;
  product: Product = new Product();
  categories: Category[];
  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
      price: ['', Validators.required],
      categoryId: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.createProductAddForm();
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
  add() {
    if (this.productAddForm.valid) {
      this.product = Object.assign({}, this.productAddForm.value);
    }
    this.productService.addProduct(this.product).subscribe((data) => {
      this.alertifyService.success(data.name + ' başarıyla eklendi.');
    });
  }
}
