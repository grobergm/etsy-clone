import { Injectable } from '@angular/core';
import { productData } from './models/product-data'
import { Product } from './models/product-model'

@Injectable()
export class ProductService {

  constructor() { }

  getAlbums() {
    return productData;
  }

  getAlbumById(albumId: number){
    for (var i = 0; i <= productData.length - 1; i++) {
      if (productData[i].id === albumId) {
        return productData[i];
      }
    }
  }

}
