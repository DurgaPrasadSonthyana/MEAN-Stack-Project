import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { MainDashboardComponent } from 'src/app/main-pages/main-dashboard/main-dashboard.component';
import { TablesComponent } from './tables/tables.component';
import { SupplierComponent } from './supplier/supplier.component';
import { Category1Component } from './category1/category1.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { ProductComponent } from './product/product.component';
import { Category2Component } from './category2/category2.component';
import { ManageExpenseComponent } from './manage-expense/manage-expense.component';
import { StatementComponent } from './statement/statement.component';
import { NewPurchasesComponent } from './new-purchases/new-purchases.component';
import { HistoryComponent } from './history/history.component';
import { NewSalesComponent } from './new-sales/new-sales.component';
import { SalesHistoryComponent } from './sales-history/sales-history.component';
import { ReportComponent } from './report/report.component';


@NgModule({
  declarations: [
    TablesComponent,
    SupplierComponent,
    Category1Component,
    SubCategoryComponent,
    ProductComponent,
    Category2Component,
    ManageExpenseComponent,
    StatementComponent,
    NewPurchasesComponent,
    HistoryComponent,
    NewSalesComponent,
    SalesHistoryComponent,
    ReportComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,FormsModule,FlexLayoutModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class MainModule { }
