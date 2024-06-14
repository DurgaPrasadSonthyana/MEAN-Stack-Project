import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.scss']
})
export class DesignationComponent implements OnInit {

  
  isHide:boolean = false;

addNew(){
  this.isHide = true ;
}

back() {
  this.isHide =false ;

}


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

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  list: any = [];
 

  displayedColumns: string[] = ['id', 'department', 'status','edit'];

  dataSource = new MatTableDataSource<any>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  ngOnInit() {

    this.dataSource = new MatTableDataSource(this.employeeList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.departmentForm = this.formBuilder.group({
      name: ['', [Validators.required]] ,
    });

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

