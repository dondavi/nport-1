import { Routes } from '@angular/router';
import { AuthGuard } from "./shared/services";
import { AdminLayoutComponent} from './core';
import {SigninComponent} from "./account/signin/signin.component";

export const AppRoutes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  { path: '', component: AdminLayoutComponent, canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'documentation',
        loadChildren: './docs/docs.module#DocsModule'
      },
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
  ];

/*
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
];
*/
