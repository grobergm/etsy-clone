import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../models/product-model';
import { ProductService } from '../product.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  providers: [ProductService]
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
