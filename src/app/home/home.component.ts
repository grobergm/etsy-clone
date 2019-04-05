import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[ProductService]
})
export class HomeComponent implements OnInit {
  reviews:FirebaseListObservable<any[]>;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.reviews=this.productService.getReviews();
  }

}
