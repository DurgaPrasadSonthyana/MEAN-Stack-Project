import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './main-pages/login/login.component';
import { SignupComponent } from './main-pages/signup/signup.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'main',
    loadChildren: () => import('./modules/main/main.module').then(m=> m.MainModule),canActivate:[AuthGuard],
  },

  {path:'user',
  loadChildren: ()=> import('./modules/user/user.module').then(m=>m.UserModule),canActivate:[AuthGuard],
},

{path:'more',
loadChildren: ()=> import('./more/more.module').then(m=>m.MoreModule), canActivate:[AuthGuard],
},
{
  path:'admin', 
  loadChildren:()=> import('./modules/admin/admin.module').then(m=>m.AdminModule),canActivate:[AuthGuard],
}
  // {
  //   path:'', component:MainShellComponent,
  //   children:[
  //     {
  //       path:'',pathMatch:'full',
  //       component: MainDashboardComponent
  //     },
  //     {
  //       path:'login', component:LoginComponent
  //     },
  //     {
  //       path:'signup', component:SignupComponent
  //     }
  //   ]
  // },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
