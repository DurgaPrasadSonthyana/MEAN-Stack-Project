import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-new-sales',
  templateUrl: './new-sales.component.html',
  styleUrls: ['./new-sales.component.scss']
})
export class NewSalesComponent implements OnInit {
  educationForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.educationForm = this.formBuilder.group({
      educations: this.formBuilder.array([
        this.createEducationFormGroup()
      ])
    });

  }
  createEducationFormGroup(): FormGroup {
    return this.formBuilder.group({
      school: ['', Validators.required],
      degree: ['', Validators.required],
      field: ['', Validators.required],
      start: ['', Validators.required],
      end: ['', Validators.required],
      grade: ['', Validators.required]
    });
  }

  get educationControls() {
    return (this.educationForm.get('educations') as FormArray);
  }

  addEducation() {
    this.educationControls.push(this.createEducationFormGroup());
  }

  removeEducation(index: number) {
    this.educationControls.removeAt(index);
  }

  
  onSubmit() {
    if (this.educationForm.valid) {
      console.log(this.educationForm.value);
    }
  }

}
