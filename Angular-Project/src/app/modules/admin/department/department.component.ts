import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {


  constructor(private router: Router, private formBuilder: FormBuilder, private mainService:MainService) {}
  
  ngOnInit() {
    console.log("asdfasdf",this.random)
        this.dataSource = new MatTableDataSource(this.employeeList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    
        this.departmentForm = this.formBuilder.group({
          name: ['', [Validators.required]] ,
        });
    
      }
  isHide:boolean = false;
  random:any = ""
 

addNew(){
  this.isHide = true ;
}

back() {
  this.isHide =false ;

}


countryList: any = [
  { id: 1, country: 'India' },
];

stateList: any = [
  { id: 1, state: 'Andhra Pradesh' },
  { id: 2, state: 'Arunachal Pradesh' },
  { id: 4, state: 'Assam' },
  { id: 5, state: 'Bihar' },
  { id: 6, state: 'Chattisghar' },
  { id: 7, state: 'Goa' },
  { id: 8, state: 'Gujarat' },
  { id: 9, state: 'Haryana' },
  { id: 10, state: 'Himachal Pradesh' },
  { id: 11, state: 'Jharkand' },
  { id: 12, state: 'Karnataka' },
  { id: 13, state: 'kerala' },
  { id: 14, state: 'Madhya Pradesh' },
  { id: 15, state: 'Maharastra' },
  { id: 16, state: 'Manipur' },
  { id: 17, state: 'Meghalaya' },
  { id: 18, state: 'Mizoram' },
  { id: 19, state: 'Nagaland' },
  { id: 20, state: 'Odisha' },
  { id: 21, state: 'Punjab' },
  { id: 22, state: 'Rajasthan' },
  { id: 23, state: 'Sikkim' },
  { id: 24, state: 'Tamil Nadu' },
  { id: 25, state: 'Telangana' },
  { id: 26, state: 'Tripura' },
  { id: 27, state: 'Uttar Pradesh' },
  { id: 28, state: 'Uttarkhand' },
  { id: 29, state: 'West Bengal' },
  { id: 30, state: 'Delhi' },
];

cityList: any = [
  { id: 1, city: 'Adoni' },
  { id: 2, city: 'Amalapuram' },
  { id: 4, city: 'Anakapalle' },
  { id: 5, city: 'Anantpur' },
  { id: 6, city: 'Bapatla' },
  { id: 7, city: 'Bheemunipatnam' },
  { id: 8, city: 'Bhimavaram' },
  { id: 9, city: 'Vishakapatnam' },
  { id: 10, city: 'Tanuku' },

];

submit() {
  // Check if the form is valid
  if (this.departmentForm.valid) {
    // Retrieve the department name from the form
    const departmentName = this.departmentForm.value.name;

    // Generate a unique ID for the new department
    const newId = this.employeeList.length + 1;

    // Add the new department to the employeeList array
    this.employeeList.push({ id: newId, department: departmentName, status:"active" });

    // Update the dataSource for the MatTable
    this.dataSource.data = this.employeeList;

    // Clear the form
    this.departmentForm.reset();

    // Hide the form after submission
    this.isHide = false;
  }
}



  cancel(element: any) {
    // Restore the original department value
    element.department = element.departmentOriginal;
    element.editable = false; // Set the editable flag to false for the selected department
    element.editing = false; // Set the editing flag to false for the selected department
}


save(element: any) {
    element.editable = false; // Set the editable flag to false for the selected department
    element.editing = false; // Set the editing flag to false for the selected department
    // Perform any save operation here
}

edit(element: any) {
  element.editable = true; // Set the editable flag to true for the selected department
  element.editing = true; // Set the editing flag to true for the selected department
  // Store the original department value
  element.departmentOriginal = element.department;
}


  employeeList: any = [
  {id:1, department: "IT" ,status: "active" }


  ]



  departmentForm:any=FormGroup;


  list: any = [];
 

  displayedColumns: string[] = ['id', 'department', 'status','edit'];

  dataSource = new MatTableDataSource<any>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  change(){
    console.log("asdfasdf",this.random)
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


}
