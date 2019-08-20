import { Routes } from '@angular/router';
/*
import { FormUploadComponent } from './form-upload/form-upload.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormDynamicComponent } from './form-dynamic/form-dynamic.component';
import { FormTreeComponent } from './form-tree/form-tree.component';
*/
import {MainComponent} from "./main/main.component";

export const PortalRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'main',
        component: MainComponent,
        data: {
          heading: 'Main',
          css: ''
        }
      }
    ]
  }
];
