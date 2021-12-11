import { AlertifyService } from 'src/app/services/alertifyService/alertify.service';
import { CategoryService } from './../../services/categoryService/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private alertifyService: AlertifyService
  ) {}
  title: 'Kategor Listesi';
  categories: Category[];
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
