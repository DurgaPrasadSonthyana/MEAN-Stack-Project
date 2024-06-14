
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  

  file: string = '/assets/profile.png';

  onFileChange(event: any) {
    const files = event.target.files as FileList;

    if (files.length > 0) {
      const _file = URL.createObjectURL(files[0]);
      this.file = _file;
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.file = e.target.result;
      };

      reader.readAsDataURL(files[0]);
      this.resetInput();   
    }
  
 }


 resetInput(){
  const input = document.getElementById('avatar-input-file') as HTMLInputElement;
  if(input){
    input.value = "";
  }
}


  productForm:any=FormGroup;
  constructor( private formbuilder:FormBuilder, private router:Router ) { }

  ngOnInit(): void {
    this.productForm =this.formbuilder.group({
      name:['',[Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      email:['',[Validators.required, Validators.pattern(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)]],
      mobile:['',[Validators.required, Validators.pattern("^[0-9]*$")]],
      designation:['',[Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      department:['',[Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      city:['',[Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    });
    this.loginData();
  }

loginData(){
  this.productForm.controls.name.setValue('Durga');
  this.productForm.controls.email.setValue('Durga@gmail.com');
  this.productForm.controls.mobile.setValue('7032568279');
  this.productForm.controls.designation.setValue('Software');
  this.productForm.controls.department.setValue('IT');
  this.productForm.controls.city.setValue('Hyderabad');
}

submit(){
if(this.productForm.valid){
  let data ={
    name: this.productForm.controls.name.value,
    email: this.productForm.controls.email.value,
    mobile: this.productForm.controls.mobile.value,
    designation: this.productForm.controls.designation.value,
    department: this.productForm.controls.department.value,
    city: this.productForm.controls.city.value,
  }
  
  console.log("given-data--",data)
  alert("Sucessfully Submitied")
}
// }else{
//   alert("Please enter all fileds")
// }

}

cancel(){
  this.productForm.reset();
  this.router.navigateByUrl('main/product');
}



}
