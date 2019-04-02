import { Injectable } from '@angular/core';
import { productData } from './models/product-data';
import { Product } from './models/product-model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProductService {
  products: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.products=database.list('products')
  }

  getProducts() {
    return this.products;
  }

  getProductById(productId: number){
    return this.database.object('products/'+productId)
  }

}
