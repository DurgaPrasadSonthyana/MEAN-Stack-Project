import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface EmployeeData {
  id: number;
  name: string;
  department: string;
  clientNumber: string;
  organization: string;
  addressLine: string;
  country: string;
  state: string;
  city: string;
  pincode: number;
}

@Component({
  selector: 'app-client-popup',
  templateUrl: './client-popup.component.html',
  styleUrls: ['./client-popup.component.scss']
})
export class ClientPopupComponent implements OnInit {
  displayedColumns: string[] = [
    'id', 'name',  'clientNumber', 'organization','department', 'addressLine', 'country', 'state', 'city', 'pincode', 'edit', 'delete'
  ];
  dataSource: MatTableDataSource<EmployeeData>;
  employeeList: EmployeeData[] = [];
  departmentForm: FormGroup;
  isEdit: boolean = false;
  currentElement: EmployeeData | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder
  ) {
    this.dataSource = new MatTableDataSource(this.employeeList);
    this.departmentForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      department: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      clientNumber: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      organization: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      addressLine: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    });
  }

  ngOnInit() {
    this.loadFromLocalStorage();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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

  openDialog(templateRef: any): void {
    this.isEdit = false;
    this.departmentForm.reset();
    this.dialog.open(templateRef);
  }

  edit(element: EmployeeData, templateRef: any): void {
    this.isEdit = true;
    this.currentElement = element;
    this.departmentForm.patchValue(element);
    this.dialog.open(templateRef);
  }

  submit(): void {
    if (this.departmentForm.valid) {
      if (this.isEdit && this.currentElement) {
        Object.assign(this.currentElement, this.departmentForm.value);
      } else {
        const newId = this.employeeList.length ? Math.max(...this.employeeList.map(e => e.id)) + 1 : 1;
        const newEmployee: EmployeeData = { id: newId, ...this.departmentForm.value };
        this.employeeList.push(newEmployee);
      }
      this.updateDataSource();
      this.saveToLocalStorage();
      this.dialog.closeAll();
    }
  }

  cancelDialog(): void {
    this.dialog.closeAll();
  }

updateDataSource(): void {
    this.dataSource.data = [...this.employeeList];
  }

  saveToLocalStorage(): void {
    localStorage.setItem('employeeList', JSON.stringify(this.employeeList));
  }

  loadFromLocalStorage(): void {
    const savedData = localStorage.getItem('employeeList');
    if (savedData) {
      this.employeeList = JSON.parse(savedData);
      this.updateDataSource();
    }
  }

  delete(element: EmployeeData): void {
    const index = this.employeeList.indexOf(element);
    if (index !== -1) {
      this.employeeList.splice(index, 1);
      this.updateDataSource();
      this.saveToLocalStorage();
    }
  }
}
