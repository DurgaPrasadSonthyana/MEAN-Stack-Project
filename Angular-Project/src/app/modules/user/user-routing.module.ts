import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { MainShellComponent } from 'src/app/main-pages/main-shell/main-shell.component';

const routes: Routes = [

  {path:'', component: MainShellComponent,
children:[
  {path:'registration', component: RegistrationComponent}
]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
