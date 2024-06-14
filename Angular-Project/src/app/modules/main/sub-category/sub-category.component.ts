import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit {

  constructor() { }
  
  @Input() data:any ;



  childData:any = "Im chaild component data";
  text:any = "Im text component data";
  
  ngOnInit(): void {

  }

}
