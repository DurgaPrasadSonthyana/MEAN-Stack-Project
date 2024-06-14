
import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import {Location }  from '@angular/common'
import { FormBuilder,UntypedFormGroup } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
 
 
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
 
  constructor(private location:Location, private formBuilder: FormBuilder,
    private router:Router, private mainService:MainService ) {
 
   }
registrationForm!:UntypedFormGroup;
recivedData:any;
 
genderList:any = [
  {
    id:1 , genderName:'Male'
  },
  {
    id:2 , genderName:'Female'
  },
  {
    id:3 , genderName:'Other'
  }
]
 
employeeList:any = [
 
  {
    id: 1,
    name: 'Sankeerth Reddy',
    genderID:1,
    genderName:'Male',
    // gender:[
    //   {  id:1, gender:'Male'  },
    //   {  id:2, gender:'Female'  },
    //   {  id:3, gender:'Other'  },
    //   ],
 
  mobile: '6565656565',
  email:'str@gmail.com',
  address:'Hyderabad',
  cityId:1,
  city:'Hyderabad'
  // city:[
  //        {  id:1, city:'Hyderabad'  },
  //        {  id:2, city:'Chennai'  },
  //       {  id:3, city:'Mumbai'  },
  //   ],
},
{
  id: 2,
  name: 'Durga',
  genderID:1,
  genderName:'Male',
  // gender:[
  //   {  id:1, gender:'Male'  },
  //   {  id:2, gender:'Female'  },
  //   {  id:3, gender:'Other'  },
  //   ],
 
mobile: '9898989898',
email:'durga@gmail.com',
address:'Chennai',
cityId:2,
city:'Chennai'
// city:[
//        {  id:1, city:'Hyderabad'  },
//        {  id:2, city:'Chennai'  },
//       {  id:3, city:'Mumbai'  },
//   ],
},
 
 
]
list:any = [] ;
 
cityList:any = [
  {id:1 , city:'Hyderabad'},
  {id:2 , city:'Chennai'},
  {id:3 , city:'Mumbai'}
];
filteredOptions!: Observable<string[]>;
displayedColumns: string[] = ['id', 'name', 'gender', 'mobile','email','address','city','view'];
dataSource = new MatTableDataSource<any>
@ViewChild(MatPaginator)  paginator!: MatPaginator;
@ViewChild(MatSort)
sort!: MatSort;
 
isHide:boolean = false;
 
 
  ngOnInit(): void {
// this.recivedData = this.location.getState();
// console.log('recivedData',this.recivedData.inputData);
 
this.registrationForm = this.formBuilder.group({
  empname:[""],
  gender:[""],
  mobile:[""],
  email:[""],
  address:[""],
  city:[""],
})
 
this.filteredOptions = this.registrationForm.controls.city.valueChanges.pipe(
  startWith(''),
  map(value => this._filter(value || '')),
);
 
this.dataSource = new MatTableDataSource(this.employeeList);
this.dataSource.paginator = this.paginator;
this.dataSource.sort = this.sort;
}
 
addNew(){
  this.isHide = true ;
}
 
 
private _filter(value: any): string[] {
  const filterValue = value.city.toLowerCase();
  return this.cityList.filter((option:any) => option.toLowerCase().includes(filterValue));
}
 
 
submit(){
  let data = {
    name: this.registrationForm.controls.empname.value,
    genderId: this.registrationForm.controls.gender.value,
    mobile: this.registrationForm.controls.mobile.value,
    email: this.registrationForm.controls.email.value,
    address: this.registrationForm.controls.address.value,
    city: this.registrationForm.controls.city.value,
  }
  console.log("input data--",data);
this.mainService.registrationSave(data).subscribe((value:any)=>{
  if(value.status ==true){
    alert("Data saved successfully")
  }else{
    alert("Unable to save data")
  }
})
}
 
cancel(){
  this.isHide =false ;
 this.registrationForm.reset();
// this.router.navigate(['/user/registration'])
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
 
viewData(data:any){
this.isHide = true ;
  this.registrationForm.controls.empname.setValue(data.name);
  this.registrationForm.controls.gender.setValue(data.genderID);
  this.registrationForm.controls.mobile.setValue(data.mobile);
  this.registrationForm.controls.email.setValue(data.email);
  this.registrationForm.controls.address.setValue(data.address);
  this.registrationForm.controls.city.setValue(data.cityId);
 
}
 
}
 