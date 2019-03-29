import { Component, OnInit } from '@angular/core';
import { categoryData } from '../models/category-data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  selectedDrop:string;
  categories:string[]=categoryData;
  constructor() { }

  ngOnInit() {
    console.log(categoryData);
  }

  changeDrop(page){
    this.selectedDrop=page;
  }
}
