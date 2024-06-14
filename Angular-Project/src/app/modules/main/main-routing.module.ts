import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashboardComponent } from 'src/app/main-pages/main-dashboard/main-dashboard.component';
import { MainShellComponent } from 'src/app/main-pages/main-shell/main-shell.component';
import { TablesComponent } from './tables/tables.component';
import { SupplierComponent } from './supplier/supplier.component';
import { Category1Component } from './category1/category1.component';
import {SubCategoryComponent} from'./sub-category/sub-category.component';
import { ProductComponent } from './product/product.component';
import { Category2Component } from './category2/category2.component';
import { ManageExpenseComponent } from './manage-expense/manage-expense.component';
import { StatementComponent } from './statement/statement.component';
import { NewPurchasesComponent } from './new-purchases/new-purchases.component';
import { HistoryComponent } from './history/history.component';
import { NewSalesComponent } from './new-sales/new-sales.component';
import { SalesHistoryComponent } from './sales-history/sales-history.component';
import { ReportComponent } from './report/report.component';


const routes: Routes = [
  {path:'',component:MainShellComponent,
  children:[
        { path:'dashboard',component:MainDashboardComponent},
        { path:'tables',component:TablesComponent},
        {path:'supplier',component:SupplierComponent},
        {path:'category1',component:Category1Component},
        {path:'sub-category',component:SubCategoryComponent },
        {path:'product',component:ProductComponent },
        {path:'category2',component:Category2Component},
        {path:'manage-expense',component:ManageExpenseComponent},
        {path:'statement',component:StatementComponent},
        {path:'new-purchases',component:NewPurchasesComponent},
        {path:'history',component:HistoryComponent},
        {path:'new-sales',component:NewSalesComponent},
        {path:'sales-history',component:SalesHistoryComponent},
        {path:'report',component:ReportComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
