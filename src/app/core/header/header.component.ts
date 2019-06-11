import { Component, EventEmitter, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { NotificationService } from './notification.service';

import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarDirective
} from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [NotificationService]
})
export class HeaderComponent {
  @Output()
  toggleSidenav = new EventEmitter<void>();

  public config: PerfectScrollbarConfigInterface = {};

  constructor(
    public notificationService: NotificationService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'search-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/search.svg')
    );
  }
}
