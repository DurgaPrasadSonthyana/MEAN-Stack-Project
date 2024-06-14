// import { Component, OnInit } from '@angular/core';
// import {
//   FormBuilder,
//   FormControl,
//   FormGroup,
//   Validators,
// } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })

// export class LoginComponent implements OnInit {
//   public loginForm: FormGroup;
//   public hide: boolean = true;

   
//   constructor(private fb: FormBuilder) {
//     this.loginForm = this.fb.group({});
//   }

//   public ngOnInit(): void {
//     this.loginForm = this.fb.group({
//       email: [null, [Validators.required]],
//       password: [null, [Validators.required]],
//     });
//   }

//   public onLogin(): void {
//     this.markAsDirty(this.loginForm);
//   }
//   private markAsDirty(group: FormGroup): void {
//     group.markAsDirty();
   
//     for (const i in group.controls) {
//       group.controls[i].markAsDirty();
//     }
//   }
// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isTrue: boolean = false;
  loginForm: any = FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private authentication: MainService, private router: Router) { }
  hide = true;
  showPassword: boolean = false;
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false],
    });
    const isRememberMe: any = localStorage.getItem('rememberMe');
    if (isRememberMe) {
      const remember = JSON.parse(isRememberMe);
      this.loginForm.controls.email.setValue(remember.email);
      this.loginForm.controls.password.setValue(remember.password);
      this.loginForm.controls.rememberMe.setValue(remember.rememberMe);
    }
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      let data = {
        email:this.loginForm.controls.email.value,
        password:this.loginForm.controls.password.value,
        rememberMe:this.loginForm.controls.rememberMe.value,
      }
      this.authentication.login(data).subscribe((res: any) => {
       
        if (this.loginForm.value.rememberMe) {
            localStorage.setItem('rememberMe', JSON.stringify(this.loginForm.value));
          } else {
            localStorage.setItem('rememberMe', '');
          }
          
          this.router.navigate(['main/dashboard']);
        (err: Error) => {
          alert(err.message);
        }

        // console.log("lg-data-",res)
        // if (res.status) {
        //   if (this.loginForm.value.rememberMe) {
        //     localStorage.setItem('rememberMe', JSON.stringify(this.loginForm.value));
        //   } else {
        //     localStorage.setItem('rememberMe', '');
        //   }
        //   this.router.navigate(['main/dashboard']);
        // }else{
        //      alert("Unable to login");
        // }

      },
     )
    }
  }

  onChangeTheme() {
    this.isTrue = !this.isTrue;
  }
  get f() { return this.loginForm.controls; }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
