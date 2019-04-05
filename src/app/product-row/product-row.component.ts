import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from '../models/product-model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.scss'],
  providers: [ProductService]
})
export class ProductRowComponent implements OnInit {
  products:FirebaseListObservable<any[]>;
  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.products=this.productService.getProducts();
  }

}
