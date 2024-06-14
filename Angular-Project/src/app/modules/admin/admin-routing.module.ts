import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from 'src/app/main-pages/edit-profile/edit-profile.component';
import { MainShellComponent } from 'src/app/main-pages/main-shell/main-shell.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { DepartmentComponent } from './department/department.component';
import { DesignationComponent } from './designation/designation.component';
import { WorkLocationComponent } from './work-location/work-location.component';
import { ClientPopupComponent } from './client-popup/client-popup.component';
import { DepartmentFormDialogComponent } from './department-form-dialog/department-form-dialog.component';
import { CrudComponent } from './crud/crud.component';






const routes: Routes = [
  {
    path: '', component: MainShellComponent,
    children: [
      { path: 'edit-profile', component: EditProfileComponent },
      { path: 'company-info', component: CompanyInfoComponent },
      { path: 'department', component: DepartmentComponent },
      { path: 'designation', component: DesignationComponent },
      { path: 'work-location', component: WorkLocationComponent },
      { path: 'client-popup', component: ClientPopupComponent },
      { path: 'department-form-dialog', component: DepartmentFormDialogComponent },
      {path: 'crud',component:CrudComponent}


    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
