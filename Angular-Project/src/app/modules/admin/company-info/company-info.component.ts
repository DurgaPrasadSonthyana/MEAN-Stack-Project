import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {
  companyForm: any = FormGroup;
  isEditing: boolean = false;
  lastSavedValues: any;
  constructor(private formBuilder: FormBuilder, private router:Router) { }
  title:any = "Company Information sample"
  ngOnInit(): void {

    this.companyForm = this.formBuilder.group({
      name: ['Durga', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      website: ['Durgaprasad', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      cin: ['234567890', [Validators.required, Validators.pattern("^[0-9]*$")]],
      gst: ['12345678', [Validators.required, Validators.pattern("^[0-9]*$")]],
      est: [new Date(), [Validators.required]],
      email: ['durga@gmail.com', [Validators.required, Validators.pattern(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)]],
      primary: ['5678943456', [Validators.required, Validators.pattern("^[0-9]*$")]],
      secondary: ['', [Validators.pattern("^[0-9]*$")]],
      address: ['Quthbullapur', [Validators.required]],
      waddress: ['Chintal', [Validators.required]],
      country: [1, [Validators.required]],
      state: [2, [Validators.required]],
      city: [4, [Validators.required]],
      pincode: ['5000055', [Validators.required, Validators.pattern("^[0-9]*$")]],



    });


    // this.loginData();

    this.companyForm.disable();


  }


  // loginData() {
  //   this.companyForm.controls.name.setValue('Durga');
  //   this.companyForm.controls.website.setValue('Durgaprasad.com');
  //   this.companyForm.controls.cin.setValue('234567890');
  //   this.companyForm.controls.gst.setValue('1234567890');
  //   this.companyForm.controls.email.setValue('durga@gmail.com');
  //   this.companyForm.controls.primary.setValue('7032568279');
  //   this.companyForm.controls.address.setValue('Quthbullapur');

  // }
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
  // Function to toggle editing mode
  toggleEdit() {
    if (this.isEditing) {
      if (this.companyForm.valid) {
        // Save changes only if form is valid
        console.log("Save changes");
        this.lastSavedValues = this.companyForm.value;
        this.companyForm.disable();
      } else {
        console.log("Form is not valid. Cannot save changes.");
        return; // Do not exit editing mode if form is invalid
      }
    } else {
      // Enter editing mode
      this.companyForm.enable(); // Enable form fields for editing
    }
    this.isEditing = !this.isEditing;
  }

  // Function to cancel editing
  cancelEdit() {
    if (this.lastSavedValues) {
      this.companyForm.patchValue(this.lastSavedValues); // Restore last saved values
    }
    this.companyForm.disable(); // Disable form fields
    this.isEditing = false; // Exit editing mode
  }

  onChange(){
   let id = 10
  //  this.router.navigate([''])
    this.router.navigate( ['main/dashboard', id]).then( (e) => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
  })
}
}
