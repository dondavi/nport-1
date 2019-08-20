import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state?: string;
  name?: string;
  type: string;
  icon?: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    type: 'title',
    name: 'MAIN'
  },
  {
    state: '/',
    name: 'HOME',
    type: 'link',
    icon: 'explore'
  },
  {
    type: 'divider'
  },
  {
    type: 'title',
    name: 'APPLICATIONS'
  },
  {
    state: 'portal',
    name: 'Portal',
    type: 'sub',
    icon: 'equilizer',
    children: [
      { state: 'main', name: 'MAIN' }
      ]
  },
  /*
  {
    state: 'account',
    name: 'ACCOUNT',
    type: 'sub',
    icon: 'verified_user',
    children: [
      { state: 'signin', name: 'SIGNIN' },
      { state: 'signup', name: 'SIGNUP' },
      { state: 'forgot', name: 'FORGOT' },
      { state: 'lockscreen', name: 'LOCKSCREEN' }
    ]
  },
   */
  /*
  {
    state: 'error',
    name: 'ERROR',
    type: 'sub',
    icon: 'error',
    children: [{ state: '404', name: '404' }, { state: 'error', name: 'ERROR' }]
  },
   */
  {
    type: 'divider'
  },
  {
    state: 'documentation',
    name: 'DOCS',
    type: 'link',
    icon: 'help'
  }
];

@Injectable()
export class MenuService {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  add(menu) {
    MENUITEMS.push(menu);
  }
}
