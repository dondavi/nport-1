import { Routes } from '@angular/router';

import { AdminLayoutComponent, AuthLayoutComponent } from './core';
import { SigninComponent } from './account/signin/signin.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from "./shared/services";


export const AppRoutes: Routes = [
  {
    path: "",
    component: SigninComponent
  },
  { path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard] }
  /*
{
path: 'dashboard',
component: AdminLayoutComponent,
children: [
 {
   path: '',
   loadChildren: './dashboard/dashboard.module#DashboardModule'
 },
 {
   path: 'documentation',
   loadChildren: './docs/docs.module#DocsModule'
 }
]
},
{
path: '',
component: AuthLayoutComponent,
children: [
 {
   path: 'account',
   loadChildren: './account/account.module#AccountModule'
 },
 {
   path: 'error',
   loadChildren: './error/error.module#ErrorModule'
 }
]
},
{
path: '**',
redirectTo: 'error/404'
}
*/
];
