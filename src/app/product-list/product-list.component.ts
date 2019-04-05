import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from '../models/product-model';
import { FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {
  products:FirebaseListObservable<any[]>;
  selected:string='all';

  constructor(private router: Router, private productService: ProductService, private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.products=this.productService.getProducts();
    this.route.params.forEach((urlParam)=>{
      if(urlParam['category']){
        this.selected=urlParam['category'];
      }
      console.log(this.selected);
    })
  }
  goToDetailPage(clickedProduct) {
   this.router.navigate(['albums', clickedProduct.$key]);
 };
}
