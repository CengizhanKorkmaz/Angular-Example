import { ProductService } from 'src/app/services/productService/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from 'src/app/services/alertifyService/alertify.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  constructor(
    private alertifyService: AlertifyService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}
  title = 'Ürün listesi';
  filterText = '';
  products: Product[];

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.productService.getProducts(params["categoryId"]).subscribe((data) => {
        this.products = data;
      });
    });
  }
  addToCart(product) {
    this.alertifyService.warning(product.name + ' sepete eklendi.');
  }
}
