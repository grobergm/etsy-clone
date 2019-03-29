import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navdrop',
  templateUrl: './navdrop.component.html',
  styleUrls: ['./navdrop.component.scss']
})
export class NavdropComponent implements OnInit {
  @Input() catName:any;
  subCategory:any;
  constructor() { }

  ngOnInit() {
    this.subCategory=this.catName.subCats[0];
  }
  changeSide(selected){
    this.subCategory=selected;
  }
  highlight(selected){
    if (selected===this.subCategory){
      return 'highlight';
    }
  }
}
