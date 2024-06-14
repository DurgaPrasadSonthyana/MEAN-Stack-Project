import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { MainShellComponent } from '../main-pages/main-shell/main-shell.component';


const routes: Routes = [
  {path:'',component: MainShellComponent,
  children:[
    {path:'edit', component:EditComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoreRoutingModule { }
 