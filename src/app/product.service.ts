import { Injectable } from '@angular/core';
import { productData } from './models/product-data';
import { Product } from './models/product-model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProductService {
  products: FirebaseListObservable<any[]>;
  reviews: FirebaseListObservable<any[]>;
  blogs: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.products=database.list('products');
    this.reviews=database.list('reviews');
    this.blogs=database.list('blogs');
  }

  getProducts() {
    return this.products;
  }

  getReviews() {
    return this.reviews;
  }

  getBlogs(){
    return this.blogs;
  }

  getProductById(productId: number){
    return this.database.object('products/'+productId)
  }

}
