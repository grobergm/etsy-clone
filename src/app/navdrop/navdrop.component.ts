import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navdrop',
  templateUrl: './navdrop.component.html',
  styleUrls: ['./navdrop.component.scss']
})
export class NavdropComponent implements OnInit {
  @Input() catName:object;
  constructor() { }

  ngOnInit() {
  }

}
