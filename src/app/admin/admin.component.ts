import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product-model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [ProductService]
})
export class AdminComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }
    submitForm(title: string, artist: string, description: string) {
    var newProduct: Product = new Product(description,price);
    this.productService.addProduct(newProduct);
  }
}
