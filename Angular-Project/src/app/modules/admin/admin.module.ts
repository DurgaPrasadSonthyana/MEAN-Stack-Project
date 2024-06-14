import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { OnlyNumberDirective } from 'src/app/shared/only-number.directive';
import { DepartmentComponent } from './department/department.component';
import { DesignationComponent } from './designation/designation.component';
import { WorkLocationComponent } from './work-location/work-location.component';
import { ClientPopupComponent } from './client-popup/client-popup.component';
import { DepartmentFormDialogComponent } from './department-form-dialog/department-form-dialog.component';
import { CrudComponent } from './crud/crud.component';


@NgModule({
  declarations: [
    CompanyInfoComponent,
    OnlyNumberDirective,
    DepartmentComponent,
    DesignationComponent,
    WorkLocationComponent,
    ClientPopupComponent,
    DepartmentFormDialogComponent,
    CrudComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,SharedModule,FormsModule,FlexLayoutModule
  ]
})
export class AdminModule { }
