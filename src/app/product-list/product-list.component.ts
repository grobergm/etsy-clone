import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from '../models/product-model';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {
  products:FirebaseListObservable<any[]>;
  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.products=this.productService.getProducts();
  }
  goToDetailPage(clickedProduct) {
   this.router.navigate(['albums', clickedProduct.$key]);
 };

}
