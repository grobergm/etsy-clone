import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product-model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() data: Product;
  selected:string='all';
  constructor(private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParam)=>{
      if(urlParam['category']){
        this.selected=urlParam['category'];
      }
      console.log(this.selected);
    })
  }

}
