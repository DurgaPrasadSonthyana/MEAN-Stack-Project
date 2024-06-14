import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  crudForm: any = FormGroup;
  title:any = "Profile"


  constructor(private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit(): void {

    this.crudForm = this.formBuilder.group({
      name: ['Durga', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      email: ['durga@gmail.com', [Validators.required, Validators.pattern(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)]],
      primary: ['5678943456', [Validators.required, Validators.pattern("^[0-9]*$")]],
    });

  }

}
