import { Component, OnInit } from '@angular/core';

import { productData } from '../models/product-data';
import { Product } from '../models/product-model';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[]= productData;
  constructor() { }

  ngOnInit() {
  }

}
