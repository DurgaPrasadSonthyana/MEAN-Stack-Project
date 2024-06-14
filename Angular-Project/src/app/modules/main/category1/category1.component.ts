import { Component, OnInit, ViewChild } from '@angular/core';
import { SubCategoryComponent } from '../sub-category/sub-category.component';

@Component({
  selector: 'app-category1',
  templateUrl: './category1.component.html',
  styleUrls: ['./category1.component.scss']
})
export class Category1Component implements OnInit {

  constructor() { }
  message:any = "Hello Sreeb team members";

  dataFromChild: any; 

  @ViewChild(SubCategoryComponent, { static: false }) sample!: { text: any; }; 

 ngAfterViewInit(){ 
          this.dataFromChild = this.sample.text; 

        } ;

  ngOnInit(): void {
  }

}
